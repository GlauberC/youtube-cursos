const mongoose = require('mongoose')
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/apirestnode", {useNewUrlParser: true})
    .then( () => console.log("MongoDB conectado"))
    .catch( err => console.log("Houve um erro ao se conectar ao mongoDB: " + err))

module.exports = mongoose

