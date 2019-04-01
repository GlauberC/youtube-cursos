import React, {Component} from 'react'

export default class CardBox extends Component{
    constructor(props){
        super()
        this.props = props
        this.state = {
            completed: this.props.task.completed
        }
        this.changeCheckbox = this.changeCheckbox.bind(this)
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
        let status = this.state.completed ? 'line-through':''
        return {
            textDecoration: status
        }
    }

    render(){
        return(
            <div style = {this.divStyle()} className = "row">
                <input style = {this.checkboxStyle()}  
                    type="checkbox"
                    onChange = {this.changeCheckbox}
                    checked = {this.state.completed}
                    value="1"
                />

                <p style = {this.styleTaskName()}>{this.props.task.name}</p>
            </div>
        )
    }

    changeCheckbox(){
        this.setState({completed: !this.state.completed})
    }
    
}

