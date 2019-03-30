const mongoose = require('../../databases/index')
const Schema = mongoose.Schema

const TaskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    project:{
        type: Schema.Types.ObjectId,
        ref: 'projects',
        required: true
    },
    assignedTo: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})


const Task = mongoose.model('tasks', TaskSchema)


module.exports = Task