const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// Body Parser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


require('./controllers/authController')(app)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Servidor rodando em localhost:${PORT}`))