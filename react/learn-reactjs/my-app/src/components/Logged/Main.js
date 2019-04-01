import React, {Component} from 'react'

export default class Main extends Component{
    constructor(){
        super()
        this.state = {
            isLoggedIn: true
        }
    }
    render(){
        return(
            <div>
                <p>You are currently logged {this.state.isLoggedIn ? 'in': 'out'}</p>
            </div>
        )
    }
}