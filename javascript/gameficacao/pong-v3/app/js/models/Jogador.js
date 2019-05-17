class Jogador {
    constructor(x, y, altura, largura, speed) {
        this.x = x;
        this.y = y;
        this.altura = altura;
        this.largura = largura;
        this.speed = speed;
        this.score = 0;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    getAltura() {
        return this.altura;
    }
    getLargura() {
        return this.largura;
    }
    getScore() {
        return this.score;
    }
    moverCima() {
        this.y -= this.speed;
    }
    moverBaixo() {
        this.y += this.speed;
    }
    setPosicao(x, y) {
        this.x = x;
        this.y = y;
    }
    marcarPonto() {
        this.score++;
    }
}
