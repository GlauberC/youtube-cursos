const express = require('express')
const router = express.Router()
const authMiddleware = require('../middlewares/auth')
const Project = require('../models/Project')
const Task = require('../models/Task')

router.use(authMiddleware)

router.get('/', async (req,res) => {
    try{
        const projects = await Project.find({user: req.userId}).populate('user')
        if(projects.length == 0){
            return res.status(404).send({error : 'No projects found'})
        }else{
            return res.status(200).send({ projects: projects })
        }
    }catch(err) {
        return res.status(400).send({ error : 'Error loading projects' })
    }
})

router.get('/:projectId', async (req,res) => {
    try{
        const projects = await Project.findOne({_id: req.params.projectId, user: req.userId}).populate('user')
        if(!projects){
            return res.status(404).send({error : 'No project found'})
        }else{
            return res.status(200).send({ projects: projects })
        }
    }catch(err) {
        return res.status(400).send({ error : 'Error loading project' })
    }
})

router.post('/', async (req,res) => {
    try{
        req.body.user = req.userId
        const project = await new Project(req.body)

        return res.status(200).send(project)
    }catch (err){
        return res.status(400).send({ error : 'Error creating new project' })
    }
})

router.put('/:projectId', async (req,res) => {
    // Faltando
})

router.delete('/:projectId', async (req,res) => {
    try{
        const projects = await Project.findOneAndDelete({_id: req.params.projectId, user: req.userId})
        if(!projects){
            return res.status(404).send({error : 'No project found'})
        }else{
            return res.status(200).send({success: 'The Project was removed'})
        }
    }catch(err) {
        return res.status(400).send({ error : 'Error deleting project' })
    }
})

module.exports = app => app.use('/projects', router)