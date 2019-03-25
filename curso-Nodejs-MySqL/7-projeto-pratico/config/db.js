if (process.env.NODE_ENV == 'prduction'){
    module.exports = {mongoURI: "mongodb+srv://Glauber:CursoNode1234@blognode-app-xp8ti.mongodb.net/test?retryWrites=true"}
    
}else{
    module.exports = {mongoURI: "mongodb://localhost/blogapp"}
}