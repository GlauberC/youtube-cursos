import React, {Component} from 'react'

export default class CardBox extends Component{
    constructor(props){
        super()
        this.props = props
    }
    render(){
        return(
            <div style = {divStyle} className = "row">
                <input style = {checkboxStyle} type="checkbox" value="1"/>
                <p>{this.props.taskName}</p>
            </div>
        )
    }
}

const divStyle = {
    borderStyle: 'outset'
}
const checkboxStyle = {
    margin: '7px',
    marginRight: '20px'
}