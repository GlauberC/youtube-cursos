import React , { Component } from 'react'
require('dotenv').config();

console.log(process.env.REACT_APP_DBSWAPI)


export default class Main extends Component{
    constructor(){
        super()
        this.state = {
            loading: false,
            char: {}
        }
    }

    componentDidMount(){
        

        this.setState({loading: true})
        fetch("https://swapi.co/api/people/1/?format=json")
        .then(response =>  response.json())
        .then(data => {
            this.setState({
                    char:data,
                    loading: false
            })
        })
    }



    render(){
        const text = this.state.loading ? "Loading...." : this.state.char.name
        return(
            <main>
                <p>{text}</p>
            </main>
        )
    }
}