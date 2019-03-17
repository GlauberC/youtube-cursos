var http = require('http');
http.createServer((req, res)=>{
    res.end("Ola")
}).listen(3000);

console.log("Servidor rodando")