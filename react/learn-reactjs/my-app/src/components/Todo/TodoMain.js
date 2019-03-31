import React, {Component} from 'react'
import CardBox from './CardBox'

export default class TodoMain extends Component{
    render(){
        return(
            <main className = "container">
                <CardBox/>
                <CardBox/>
                <CardBox/>
                <CardBox/>
            </main>
        )
    }
}