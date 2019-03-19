const express = require("express")
const router = express.Router()
const mongoose = require('mongoose')
require('../models/Categoria')
const Categoria = mongoose.model('categorias')
require('../models/Postagem')
const Postagem = mongoose.model('postagens')

// Definindo as rotas de categorias
    router.get('/categorias', (req, res) => {
        Categoria.find().sort({date: 'desc'})
            .then( categorias => {
                res.render('admin/categorias', {categorias: categorias})
            }).catch(err => {
            req.flash('error_msg', "Houve um erro ao listar as categorias")
            res.redirect('/admin')
        })
        
    })

    router.get('/categorias/add', (req, res) => res.render('admin/addcategorias'))

    router.get("/categorias/edit/:id" , (req, res) => {
        Categoria.findOne({_id: req.params.id})
            .then(categoria =>{
                res.render('admin/editcategoria',{categoria:categoria})
            }).catch(err => {
                req.flash("error_msg", "Esta categoria não existe")
                res.redirect("/admin/categorias")
            })
        
    })
    router.post("/categorias/edit", (req, res) => {
        Categoria.findOne({_id: req.body.id})
            .then(categoria => {
                categoria.nome = req.body.nome
                categoria.slug = req.body.slug

                categoria.save()
                    .then(() => {
                        req.flash('success_msg', 'Categoria editada com sucesso!')
                        res.redirect('/admin/categorias')
                    })
                    .catch((err) => {
                        req.flash("error_msg", "Houve um erro interno ao salvar a edição da categoria")
                        res.redirect('/admin/categorias')
                    })
            }).catch( err => {
                req.flash('error_msg', "Houve um erro ao editar a categoria")
                res.redirect("/admin/categorias")
            })
    })
    router.post("/categorias/deletar", (req, res) => {
        Categoria.remove({_id: req.body.id})
            .then(()=>{
                req.flash("success_msg", "Categoria deletada com sucesso!")
                res.redirect("/admin/categorias")
            }).catch(err => {
                req.flash("error_msg", "Houve um erro ao deletar a categoria")
                res.redirect("/admin/categorias")
            })
    })
    router.post('/categorias/nova', (req, res) => {
        var erros = []

        if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null){
            erros.push({texto: "Nome inválido"})
        }
        if(req.body.nome.length < 2){
            erros.push({texto: "Nome da categoria é muito pequeno"})
        }
        if(!req.body.slug || typeof req.body.slug == undefined || req.body.slug == null){
            erros.push({texto: "Slug inválido"})
        }


        if(erros.length > 0){
            res.render("admin/addcategorias", {erros: erros})
        }else{
            const novaCategoria = {
                nome: req.body.nome,
                slug: req.body.slug
            }
            new Categoria(novaCategoria).save()
                .then(() => {
                    req.flash("success_msg", "Categoria criada com sucesso")
                    res.redirect("/admin/categorias")
                })
                .catch( err => {
                    req.flash("erro-msg", "Houve um erro ao salvar a categoria, tente novamente")
                    res.redirect("/admin")
            })
        }

        
    })

// Definindo as rotas de postagens

    router.get('/postagens', (req, res) => {
        res.render("admin/postagens")
    })
    router.get("/postagens/add", (req, res) => {
        Categoria.find()
            .then( categorias => {
                res.render("admin/addpostagem", {categorias: categorias})
            }).catch( err => {
                req.flash("error_msg", "Houve um erro ao carregar o formulario")
                res.redirect('/admin')
            })
        
    })
    router.post("/postagens/nova", (req, res) => {
        var erros = []
        if(req.body.categora == '0'){
            erros.push({texto: "Categoria inválida, registre uma categoria"})
        }
        if(erros.length > 0){
            res.render('admin/postagens/add', {erros: erros})
        }else{
            const novaPostagem = {
                titulo: req.body.titulo,
                slug: req.body.slug,
                descricao: req.body.descricao,
                conteudo: req.body.conteudo,
                categoria: req.body.categoria
            }
            new Postagem(novaPostagem).save()
                .then( () => {
                    req.flash('success_msg', 'Postagem criada com sucesso')
                    res.redirect('/admin/postagens')
                }).catch(err => {
                    req.flash('error_msg', 'Houve um erro ao criar a postagem')
                    res.redirect('/admin/postagens')
                })
        }
    })
module.exports = router