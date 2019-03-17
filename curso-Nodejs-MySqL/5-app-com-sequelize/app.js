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
    
    // DELETAR DPS:
    // CONTINUAR COM O VIDEO https://www.youtube.com/watch?v=Oo8oNXyrxB0&list=PLJ_KhUnlXUPtbtLwaxxUxHqvcNQndmI4B&index=25

    app.get('/', (req, res) => {
        Post.findAll()
            .then(posts => {
                res.render('home', {posts: posts})
            })
        
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

