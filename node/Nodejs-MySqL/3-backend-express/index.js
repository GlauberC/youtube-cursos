const express = require('express')
const app = express()

// Só pode enviar um send por rota

// Enviando arquivo
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/html/index.html")
})
// __dirname = caminho absoluto(evitará alguns erros futuros)

app.get("/sobre", (req, res) => {
    res.sendFile(__dirname + "/html/sobre.html")
})

app.get("/blog", (req, res) => {
    res.send("Bem vindo ao meu blog")
})

// Parametros  :
// localhost:3000/params/NOME/CARGO
app.get("/params/:nome/:cargo", (req,res) => {
    res.send(req.params)
})

app.get("/ola/:nome", (req,res) => {
    res.send("Ola " + req.params.nome)
})


app.listen(3000, () => {
    console.log("Sevidor rodando http://localhost:3000")
}) //Deve ser a ultima linha do código
