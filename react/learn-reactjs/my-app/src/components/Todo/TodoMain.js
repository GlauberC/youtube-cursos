import React, {Component} from 'react'
import CardBox from './CardBox'

export default class TodoMain extends Component{
    constructor(){
        super()

        this.tasks = [
            {id: '0001', name: "Go to the movies", completed: false},
            {id: '0002', name: "Study french", completed: false},
            {id: '0003', name: "Date with my girlfriend", completed: true},
            {id: '0004', name: "Clean my room", completed: false},
        ]

        this.tasksComponents = this.tasks.map( task => <CardBox key = {task.id} task = {task}/>)
    }
    render(){
        return(
            <main className = "container">
                {this.tasksComponents}
            </main>
        )
    }
}