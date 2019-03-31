import React, {Component} from 'react'

export default class MyInfo extends Component{
    render(){
        return(
            <div className="myInfo">
                <h1>Glauber Carvalho</h1>
                <p>Eu estou estudando para ser um bom programador, agora estou aprendendo um pouco de reactjs</p>
                <h2>Lugares que eu gostaria de visitar:</h2>
                <ul>
                    <li>Itália</li>
                    <li>Canadá</li>
                    <li>Chile</li>
                </ul>
            </div>
        )
    }
}