const express = require('express')
const app = express()
const server = require('http').createServer(app)

const io = require('socket.io')(server)

let msgs = []

app.use('/', (req, res) => {
    res.send('<h1>Olá server</h1>')
})

io.on('connection', socket => {
    console.log(`socket conectado: ${socket.id}`)
    socket.emit(`msgAnteriores`, msgs)

    socket.on('sendMsg', data => {
        msgs.push(data)
        socket.broadcast.emit('recebeMsg', data)
    })

})

server.listen(3001)