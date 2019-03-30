    
const mongoose = require('../../databases/index')
const Schema = mongoose.Schema

const ProjectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    tasks: [{
        type: Schema.Types.ObjectId,
        ref: 'tasks',
        default: []
    }],
    createdAt:{
        type: Date,
        default: Date.now
    }
})


const Project = mongoose.model('projects', ProjectSchema)


module.exports = Project