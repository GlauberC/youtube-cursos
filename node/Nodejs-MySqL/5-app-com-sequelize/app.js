const express = require('express');
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post')



// CONFIGURAÇÕES:
    // Configurando o handlebars com tempate engine
        app.engine('handlebars', handlebars({defaultLayout:'main'}))
        app.set('view engine' , 'handlebars') // Criar pasta views/layouts/main.handlebars 

    // Body Parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

// ROTAS
    
    
    app.get('/', (req, res) => {
        Post.findAll()  //é possível colocar ordem crescente ou decrescente com essa função
            .then(posts => {
                res.render('home', {posts: posts})
            })
        
    })
    app.get("/deletar/:id", (req, res) => {
        Post.destroy({where: {'id': req.params.id}})
            .then(() => res.send("Postagem deletada com sucesso"))
            .catch( er => res.send("Esta postagem não existe") )
    })
    app.get('/cad', (req, res) => res.render('formulario'))

    app.post('/submitPostagem', (req, res) => {
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(() => res.redirect('/'))
        .catch(er => res.send("Houve um erro: " + er))
    })


app.listen('3000', () => {
    console.log("Servidor Rodando na url http://localhost:3000")
})

