import React, {Component} from 'react'

export default class Main extends Component{
    constructor(){
        super()
        this.state = {
            nClick: 0
        }

        this.handledClick = this.handledClick.bind(this)
    }
    handledClick(){
        this.setState({ nClick: this.state.nClick + 1})
    }

    render(){
        return(
            <main>
                <h4>Clicks Number: {this.state.nClick}</h4>
                <button onClick={this.handledClick} className = "btn btn-success">Click me</button>
            </main>
        )
    }
}