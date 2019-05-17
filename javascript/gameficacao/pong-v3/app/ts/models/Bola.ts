class Bola {
    
    private dirX: number
    private dirY: number
    private modf: number
    constructor(private x: number, private y: number, private largura: number, private altura: number, private speed: number){
        this.modf = 0
        this.dirX = Math.floor( Math.random() * 2 ) == 0 ? -1 : 1
        this.dirY = Math.floor( Math.random() * 2 ) == 0 ? -1 : 1
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

    public acelerar(): void{
        this.modf += 0.2
    }
    public alteraEixoX(): void{
        this.dirX *= -1
    }
    public alteraEixoY(): void{
        this.dirY *= -1
    }
    public mover(){
        this.x += this.dirX * ( this.speed + this.modf)
        this.y += this.dirY * ( this.speed + this.modf)
    }

}