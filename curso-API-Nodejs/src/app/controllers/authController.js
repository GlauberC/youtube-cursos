
const express = require("express")
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authConfig = require('../../config/auth')

function generateToken(params = {}){
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400
    })
}


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
router.post('/authenticate', async (req, res) => {
    const {email, password} = req.body

    const user = await User.findOne({email}).select('+password')
    if(!user){
        return res.status(400).send({error: 'User not found'})
    }

    if(!await bcrypt.compare(password, user.password)){
        return res.status(400).send({error: 'Invalid password'})
    }

    user.password = undefined
    res.send({
        user, 
        token: generateToken({id: user.id})
    })
})


module.exports = app => app.use('/auth', router)