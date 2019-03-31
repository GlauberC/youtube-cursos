import React, {Component} from 'react'
import CardBox from './CardBox'

export default class TodoMain extends Component{
    render(){
        return(
            <main className = "container">
                <CardBox taskName = "Go to the movies"/>
                <CardBox taskName = "Study french"/>
                <CardBox taskName = "Date with my girlfriend"/>
                <CardBox taskName = "Clean my room"/>
            </main>
        )
    }
}