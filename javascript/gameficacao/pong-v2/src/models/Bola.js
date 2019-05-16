class Bola{
    constructor(x, y, altura, largura, speed){
        this.x = x
        this.y = y
        this.altura = altura
        this.largura = largura
        this.speed = speed
        this.modf = 0
        this.dirX = Math.floor( Math.random() * 2 ) == 0 ? -1 : 1
        this.dirY = Math.floor( Math.random() * 2 ) == 0 ? -1 : 1
    }
    acelera(){
        this.modf += 0.2
    }
    alteraEixoX(){
        this.dirX *= -1
    }
    alteraEixoY(){
        this.dirY *= -1
    }

}