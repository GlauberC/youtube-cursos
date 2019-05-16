class Jogador{
    constructor(x, y, altura, largura, speed){
        this.x = x
        this.y = y
        this.altura = altura
        this.largura = largura
        this.score = 0
        this.speed = speed
    }

    moverCima(){
        this.y -= this.speed
    }
    moverBaixo(){
        this.y += this.speed
    }
    setPosicao(x, y){
        this.x = x
        this.y = y
    }
    marcouPonto(){
        this.score++
    }
}