import React, {Component} from 'react'

export default class Main extends Component {
    constructor(){
        super()
        this.state = {
            isLogged: false
        }
        this.logInOut = this.logInOut.bind(this)
    }

    inOutText(bool = this.state.isLogged){
        return bool? 'in' : 'out'
    }
    logInOut(){
        this.setState({isLogged: !this.state.isLogged})
    }
    render(){
        return(
            <main className = 'container mt-2'>
                <p>You are currently logged {this.inOutText()} </p>

                <button className = {`btn btn-${this.state.isLogged? "danger":"success"}`}
                    onClick = {this.logInOut}
                    >Log{this.inOutText(!this.state.isLogged)}
                </button>

            </main>
        )
    }
}