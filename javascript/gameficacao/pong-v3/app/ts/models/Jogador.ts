class Jogador{
    private score: number
    constructor(private x: number, private y: number, private altura: number, private largura: number, private speed: number ){
        this.score = 0
    }
    public getX(): number{
        return this.x
    }
    public getY(): number{
        return this.y
    }
    public getAltura(): number{
        return this.altura
    }
    public getLargura(): number{
        return this.largura
    }
    public getScore(): number{
        return this.score
    }

    public moverCima(): void{
        this.y -= this.speed
    }
    public moverBaixo(): void{
        this.y += this.speed
    }
    public setPosicao(x: number, y: number): void{
        this.x = x
        this.y = y
    }
    public marcarPonto(){
        this.score++
    }
}