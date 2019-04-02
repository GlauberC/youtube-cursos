import React, {Component} from 'react'

export default class Loading extends Component{
    constructor(){
        super()
        this.state = {
            loadingDot: '.'
        }
        this.dotRepeat = ''
    }
    componentDidMount(){
        this.timerDot()
    }
    componentWillUnmount(){
        clearInterval(this.dotRepeat)
        console.log('Loading Will Unmount')
    }


    timerDot(){
        this.dotRepeat = setInterval( () => {
            if(this.state.loadingDot === '.....'){
                this.setState({loadingDot: '.'})
            }else{
                this.setState({loadingDot: this.state.loadingDot + '.'})   
            }
        }, 300)
    }

    render(){
        return(
            <h2>Loading{this.state.loadingDot}</h2>
        )
    }
}