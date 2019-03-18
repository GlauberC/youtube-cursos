const mongoose = require('mongoose')

// Configurando o mongoose
    mongoose.Promise = global.Promise;
    mongoose.connect("mongodb://localhost/aprendendo", {useNewUrlParser: true})
        .then( () => console.log("MongoDB conectado"))
        .catch( err => console.log("Houve um erro ao se conectar ao mongoDB: " + err))

// Configurando Model Usuarios
    const UserSchema = mongoose.Schema({
        nome: {
            type: String,
            require: true
        },
        sobrenome: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        idade: {
            type: Number,
            require: true
        },
        pais: {
            type: String
        }
    })

// Nome da collection
    mongoose.model('usuarios', UserSchema)

// Inserindo dados
    const Usuario = mongoose.model('usuarios')
    new Usuario({
        nome: "João",
        sobrenome: "do Pé de Feijão",
        email: "joao@email.com",
        idade: 60,
        pais: "Brasil"
    }).save()
        .then( () => console.log("Usuario criado com sucesso"))
        .catch( err => console.log("Erro ao criar usuário - " + err))
