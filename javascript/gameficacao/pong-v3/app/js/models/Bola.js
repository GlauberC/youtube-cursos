class Bola {
    constructor(x, y, largura, altura, speed) {
        this.x = x;
        this.y = y;
        this.largura = largura;
        this.altura = altura;
        this.speed = speed;
        this.modf = 0;
        this.dirX = Math.floor(Math.random() * 2) == 0 ? -1 : 1;
        this.dirY = Math.floor(Math.random() * 2) == 0 ? -1 : 1;
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
    acelerar() {
        this.modf += 0.2;
    }
    alteraEixoX() {
        this.dirX *= -1;
    }
    alteraEixoY() {
        this.dirY *= -1;
    }
    mover() {
        this.x += this.dirX * (this.speed + this.modf);
        this.y += this.dirY * (this.speed + this.modf);
    }
}
