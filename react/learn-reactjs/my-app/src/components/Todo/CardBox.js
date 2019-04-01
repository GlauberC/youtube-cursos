import React, {Component} from 'react'

export default class CardBox extends Component{
    constructor(props){
        super()
        this.props = props
    }
    render(){
        return(
            <div style = {this.divStyle()} className = "row">
                <input style = {this.checkboxStyle()}  type="checkbox" value="1"/>
                <p style = {this.styleTaskName()}>{this.props.task.name}</p>
            </div>
        )
    }
    divStyle(){
        return{
            borderStyle: 'outset'
        }
    }
    checkboxStyle(){
        return{
            margin: '7px',
            marginRight: '20px'
        }
    }
    styleTaskName(){
        let status = this.props.task.completed ? 'line-through':''
        return {
            textDecoration: status
        }
    }
    
}

