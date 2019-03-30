const express = require('express')
const router = express.Router()
const authMiddleware = require('../middlewares/auth')


router.get('/', authMiddleware, (req,res) => {
    res.status(200).send({user: req.userId})
})

module.exports = app => app.use('/projects', router)