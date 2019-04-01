import React, {Component} from 'react'

export default class Product extends Component{
    constructor(props){
        super()
        this.props = props
    }
    render(){
        return(
            <div className = "row">
                <h2 className = "col-md-4 offset-md-3">{this.props.product.name}</h2>
                <h3 className = "col-md-5">Preço: {this.props.product.price}</h3>
            </div>
        )
    }
}