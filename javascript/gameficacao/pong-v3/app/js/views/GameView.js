class GameView {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.context = context;
    }
    render(bola, jogadorEsquerda, jogadorDireita) {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.fillStyle = 'white';
        this.context.fillRect(bola.getX(), bola.getY(), bola.getLargura(), bola.getAltura());
        this.context.fillRect(jogadorEsquerda.getX(), jogadorEsquerda.getY(), jogadorEsquerda.getLargura(), jogadorEsquerda.getAltura());
        this.context.fillRect(jogadorDireita.getX(), jogadorDireita.getY(), jogadorDireita.getLargura(), jogadorDireita.getAltura());
        this.context.font = '20px Arial';
        this.context.fillText("Score: " + jogadorEsquerda.getScore(), 50, 20);
        this.context.fillText("Score: " + jogadorDireita.getScore(), this.canvas.width - 150, 20);
    }
}
