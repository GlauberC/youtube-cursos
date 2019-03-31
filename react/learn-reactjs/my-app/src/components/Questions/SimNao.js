import React, {Component} from 'react'

export default class SimNao extends Component{
    constructor(props){
        super()
        this.props = props
        this.radioStyle = {
            marginRight: '10px',
            marginLeft: '10px'
        }
    }
    render(){
        return(
            <div className="form-check-inline">
                <label style={this.radioStyle} className="form-check-label">
                    <input type="radio" className="form-check-input" name={this.props.radio}/>Sim
                </label>
                <label className="form-check-label">
                    <input type="radio" className="form-check-input" name={this.props.radio}/>Não
                </label>
            </div>
        )
    }
}