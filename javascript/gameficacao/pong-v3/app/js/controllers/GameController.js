class GameController {
    constructor() {
        this.canvas = document.getElementById('canvas-game');
        this.context = this.canvas.getContext('2d');
        this.teclas = {};
        this.gameView = new GameView(this.canvas, this.context);
        this.bola = new Bola(this.canvas.width / 2 - 15, this.canvas.width / 2 - 15, 30, 30, 1);
        this.jogadorEsquerda = new Jogador(10, this.canvas.height / 2 - 60, 120, 30, 5);
        this.jogadorDireita = new Jogador(560, this.canvas.height / 2 - 60, 120, 30, 5);
        this.apertaSoltaTeclas();
        setInterval(() => {
            this.desenhar();
        }, 5);
    }
    apertaSoltaTeclas() {
        document.addEventListener("keydown", (e) => {
            this.teclas[e.keyCode] = true;
        }, false);
        document.addEventListener("keyup", (e) => {
            delete this.teclas[e.keyCode];
        }, false);
    }
    desenhar() {
        this.gameView.render(this.bola, this.jogadorEsquerda, this.jogadorDireita);
        this.movaJogador(this.jogadorDireita, 38, 40);
        this.movaJogador(this.jogadorEsquerda, 87, 83);
        this.bola.mover();
        this.AtivarColisao();
        this.definirVencedor();
    }
    movaJogador(jogador, teclaCima, teclaBaixo) {
        if (teclaCima in this.teclas && jogador.getY() > 0) {
            jogador.moverCima();
        }
        if (teclaBaixo in this.teclas && jogador.getY() + jogador.getAltura() < this.canvas.height) {
            jogador.moverBaixo();
        }
    }
    AtivarColisao() {
        if (this.bola.getX() <= this.jogadorDireita.getX() + this.jogadorDireita.getLargura() &&
            this.bola.getX() >= this.jogadorDireita.getX() - this.bola.getLargura() &&
            this.bola.getY() >= this.jogadorDireita.getY() - this.bola.getAltura() &&
            this.bola.getY() <= this.jogadorDireita.getY() + this.jogadorDireita.getAltura()) {
            this.bola.alteraEixoX();
        }
        else if (this.bola.getX() <= this.jogadorEsquerda.getX() + this.jogadorEsquerda.getLargura() &&
            this.bola.getX() >= this.jogadorEsquerda.getX() &&
            this.bola.getY() >= this.jogadorEsquerda.getY() - this.bola.getAltura() &&
            this.bola.getY() <= this.jogadorEsquerda.getY() + this.jogadorEsquerda.getAltura()) {
            this.bola.alteraEixoX();
        }
        if (this.bola.getY() <= 0) {
            this.bola.alteraEixoY();
            this.bola.acelerar();
        }
        else if (this.bola.getY() + this.bola.getAltura() >= this.canvas.height) {
            this.bola.alteraEixoY();
            this.bola.acelerar();
        }
    }
    definirVencedor() {
        if (this.bola.getX() <= 0) {
            this.recomecarJogo(this.jogadorDireita);
        }
        else if (this.bola.getX() + this.bola.getLargura() >= this.canvas.width) {
            this.recomecarJogo(this.jogadorEsquerda);
        }
    }
    recomecarJogo(vencedor) {
        this.bola = new Bola(this.canvas.width / 2 - 15, this.canvas.width / 2 - 15, 30, 30, 1);
        vencedor.marcarPonto();
        this.jogadorDireita.setPosicao(560, this.canvas.height / 2 - 60);
        this.jogadorEsquerda.setPosicao(10, this.canvas.height / 2 - 60);
    }
}
