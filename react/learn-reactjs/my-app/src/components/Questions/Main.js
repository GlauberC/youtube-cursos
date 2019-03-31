import React, {Component} from 'react'
import Question from './Question'

export default class Main extends Component{
    constructor(){
        super()
        this.questions = [
            {id: '0', name:"Você tem mais que 18 anos" , radio: "idade"},
            {id: '1', name:"Você é do sexo masculino?"  , radio: "sexo" },
            {id: '2', name:"Você tem algum problema de saúde?" , radio: "saude" },
            {id: '3', name:"Você já terminou o ensino médio?" , radio: "ensino"}
        ]

        this.questionComponents = this.questions.map(
            (question) => <Question key = {question.id} question = {question.name} radio = {question.radio}  
        />)

    }
    render(){

        return (
            <main className = "content">{this.questionComponents}</main>
        )
    }



}