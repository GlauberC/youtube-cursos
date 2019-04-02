import React, {Component} from 'react'
import Loaded from './Loaded'
import Loading from './Loading'

export default class Main extends Component{
    constructor(){
        super()
        this.state = {
            isLoaded: false,
        }
        
    }
    componentDidMount(){
        console.log("Main Did Mount")
        setTimeout(() => {
            this.setState({isLoaded: !this.state.isLoaded})

        },5000)

    }

    render(){
        return(
            <main>
                {this.state.isLoaded ? <Loaded/> : <Loading/>}
            </main>
        )
    }
}