const express = require("express");
const { engine } = require('express-handlebars');
const app = express();
const handlebars = require('express-handlebars');
const pOST = require('./models/Post');
const Post = require("./models/Post");


// config 
    
    //Middlewares (body-parse)
    app.use(express.json())
    app.use(express.urlencoded({ extends: false }))
    //templete enginee
    app.engine('handlebars', engine({ defaultLayout: 'main', }));
    app.set('view engine', 'handlebars')








//rotas

app.get('/',function(req,res){
    Post.findAll({order:[['id','DESC']]}).then(function(posts){
    res.render('home',{posts:posts})
   })
    
})

app.get('/cad', function (req, res) {
    res.render('formulario')
})

app.post('/add', function (req, res) {

    Post.create({
        titulo:req.body.titulo,
        conteudo:req.body.conteudo
        }).then(function(){
            res.redirect('/')
        }).catch(function(erro){
            res.send("Houve um error : "+erro)
        })

})


app.get('/deletar/:id',function(req,res){
    Post.destroy({where:{'id':req.params.id}}).then(function(){
    res.send("Postagem deletada com Sucesso !!")
}).catch(function(erro){
    res.send("Esta postagem não existe!! "+erro)
})

})




app.listen(8082, function () {
    console.log("Servido aberto na portal 8082 Url : http://localhost:8082");
})