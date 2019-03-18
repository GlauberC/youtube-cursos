const express = require("express")
const router = express.Router()

    // Definindo as rotas
    router.get('/', (req, res) => res.render("admin/index"))

    router.get('/posts', (req, res) => res.send("Pagina de posts"))

    router.get("/categorias", (req, res) => res.send("Página de categorias"))

module.exports = router