import React, {Component} from 'react'
import Navbar from './Navbar'
import Container from './Container'
import Footer from './Footer'
import './css/footer.css'
export default class Main extends Component{
    render(){
        return(
            
            <main>
                <Navbar/>
                <Container/>
                <Footer/>
            </main>
            
        )
    }

}