import React, {Component} from 'react'
import CardBox from './CardBox'
import tasks from './todoData'

export default class Main extends Component{
    constructor(){
        super()
        this.state = {
            todo: tasks
        }
    }
    render(){
        let tasksComponents = this.state.todo.map( task => <CardBox key = {task.id} task = {task}/>)
        return(
            <main className = "container">
                {tasksComponents}
            </main>
        )
    }
}