import React, {Component} from 'react'

export default class CardBox extends Component{
    render(){
        return(
            <div className = "card mt-4">
                <div className = "card-body row">
                    <div className = "col-md-6 offset-md-2">
                        <p>Titulo da tarefa</p>
                    </div>
                    <div className = "col-md-4 form-check">
                        <input type="checkbox" className="form-check-input" value="1"/>
                    </div>
                </div>
            </div>
        )
    }
}