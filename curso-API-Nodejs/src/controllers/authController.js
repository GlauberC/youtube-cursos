
const express = require("express")

const router = express.Router()

const User = require('../models/User')


router.post('/register', async (req, res) => {
    const { email } = req.body;
    try {
        if(await User.findOne({ email })){
            return res.status(400).send({error: 'User already exists'})
        }
        await new User(req.body).save()
        return res.status(200).send(req.body)
    } catch {
        return res.status(400).send({error: 'Registration failed'})
    }
})


module.exports = app => app.use('/auth', router)