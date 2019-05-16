class GameController{
    constructor(){
        this._canvas = document.getElementById( 'canvas-game' )
        this._context = this._canvas.getContext( '2d' )
        this.teclas = {
        }

        this._gameView = new GameView( this._canvas, this._context )

        this._bola = new Bola( this._canvas.width / 2 - 15,
                             this._canvas.width / 2 - 15,
                             30,
                             30,
                             1 )

        this._jogadorEsquerda = new Jogador( 10,
                                            this._canvas.height / 2 - 60,
                                            120,
                                            30,
                                            5)

        this._jogadorDireita = new Jogador( 560,
                                    this._canvas.height / 2 - 60,
                                    120,
                                    30,
                                    5)
                                    
        
        this._apertaSoltaTeclas()

        this._desenha()
        setInterval( ()=>{
            this._desenha()
        }, 5)

        
    }

    _desenha(){
        this._moveJogador(this._jogadorEsquerda, 87, 83)
        this._moveJogador(this._jogadorDireita, 38, 40)
        this._moveBola()
        this._toque()
        this._acabouRodada()
        this._gameView.render( this._bola, this._jogadorEsquerda, this._jogadorDireita )
        
    }

    _apertaSoltaTeclas(){
        document.addEventListener("keydown", (e)=> {
            this.teclas[e.keyCode] = true
        }, false)

        document.addEventListener("keyup", (e)=> {
            delete this.teclas[ e.keyCode ]
        }, false)
    }

    _moveJogador(jogador, teclaCima, teclaBaixo){
        if( teclaCima in this.teclas && jogador.y > 0 ){
            jogador.moverCima()
        }
        if( teclaBaixo in this.teclas && jogador.y + jogador.altura < this._canvas.height ){
            jogador.moverBaixo()
        }
        
    }
    _moveBola(){
        this._bola.x += this._bola.dirX * ( this._bola.speed + this._bola.modf)
        this._bola.y += this._bola.dirY * ( this._bola.speed + this._bola.modf)
    }
    _toque(){

        if( this._bola.x <= this._jogadorDireita.x + this._jogadorDireita.largura &&
            this._bola.x >= this._jogadorDireita.x - this._bola.largura &&
            this._bola.y >= this._jogadorDireita.y - this._bola.altura &&
            this._bola.y <= this._jogadorDireita.y + this._jogadorDireita.altura){

            this._bola.alteraEixoX()

        }else if( this._bola.x <= this._jogadorEsquerda.x + this._jogadorEsquerda.largura &&
                  this._bola.x >= this._jogadorEsquerda.x &&
                  this._bola.y >= this._jogadorEsquerda.y - this._bola.altura &&
                  this._bola.y <= this._jogadorEsquerda.y + this._jogadorEsquerda.altura){

            this._bola.alteraEixoX()
        }
        
        if( this._bola.y <= 0){
            this._bola.alteraEixoY()
            this._bola.acelera()
        }else if( this._bola.y + this._bola.altura >= this._canvas.height){
            this._bola.alteraEixoY()
            this._bola.acelera()
        }        
    }

    _acabouRodada(){
        if( this._bola.x <= 0 ){
            this._comecaJogo(this._jogadorDireita)
        }else if( this._bola.x + this._bola.largura >= this._canvas.width ){
            this._comecaJogo(this._jogadorEsquerda)
        }
    }
    _comecaJogo(vencedor){
        this._bola = new Bola( this._canvas.width / 2 - 15,
            this._canvas.width / 2 - 15,
            30,
            30,
            1 )
        vencedor.marcouPonto()
        this._jogadorDireita.setPosicao( 560, this._canvas.height / 2 - 60 )
        this._jogadorEsquerda.setPosicao( 10, this._canvas.height / 2 - 60 )
    }

}