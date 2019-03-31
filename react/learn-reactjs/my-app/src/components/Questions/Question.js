import React, {Component} from 'react'
import SimNao from './SimNao'

export default class Question extends Component{
    constructor(props){
        super()
        this.props = props

        this.styleBoard = {
            marginLeft:'20px',
            borderStyle: 'outset'
        }
    }
    render(){
        return(
            <div style={this.styleBoard}>
                <p>{this.props.question}</p>
                <SimNao radio = {this.props.radio}/>
            </div>
        )
    }
}