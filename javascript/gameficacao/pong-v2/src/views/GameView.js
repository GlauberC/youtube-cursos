class GameView{
    constructor(canvas, context){
        this._canvas = canvas
        this._context = context
    }
    render( bola, jogadorEsquerda, jogadorDireita ){
        this._context.clearRect( 0, 0, this._canvas.width, this._canvas.height )
        this._context.fillStyle = 'white'
        this._context.fillRect( bola.x, bola.y, bola.largura, bola.altura )
        this._context.fillRect( jogadorEsquerda.x, 
                                jogadorEsquerda.y, 
                                jogadorEsquerda.largura,
                                jogadorEsquerda.altura )
                                
        this._context.fillRect( jogadorDireita.x, 
                        jogadorDireita.y, 
                        jogadorDireita.largura,
                        jogadorDireita.altura )
        
        this._context.font ='20px Arial'
        this._context.fillText( "Score: " + jogadorEsquerda.score, 50, 20 )
        this._context.fillText( "Score: " + jogadorDireita.score, this._canvas.width - 150 , 20 )
    }
}