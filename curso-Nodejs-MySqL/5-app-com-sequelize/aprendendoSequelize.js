const Sequelize = require('sequelize')

// Sequelize('BANCO DE DADOS', 'USUARIO', 'SENHA', {HOST, 'mysqq'})
const sequelize = new Sequelize('teste', 'root', 'GlAGMs34', {
    host: "localhost",
    dialect: 'mysql'
})

// VERIFICAR AUTENTICAÇÃO COM O BANCO DE DADOS

sequelize.authenticate()
        .then(() => console.log('\n\nConectado com sucesso ao banco de dados'))
        .catch( er => console.log("Falha ao se conectar - " + er) )


// Criar tabela postagens
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

// CONFIRMAR CRIAÇÃO DA TABELA POSTAGENS

Postagem.sync({force: true})


const Usuario = sequelize.define('usuarios', {
    nome:{
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

// CONFIRMAR CRIAÇÃO DA TABELA USUARIOS

Usuario.sync({force: true})


// INSERIR DADOS

Postagem.create({
    titulo: "Meu aprendizado com sequelize",
    conteudo: "Agora estou aprendendo a inserir dados usando o sequelize"
})

Usuario.create({
    nome: 'Glauber',
    sobrenome: 'Carvalho',
    idade: '29',
    email: 'glauber@email.com'
})