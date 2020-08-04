const express = require('express')
const router = express.Router()
const MovieModel = require('../models/movies')

router.get('/movies', (req,res)=>{
    MovieModel.find()
        .then((movie)=>{
            res.render('movies/index.hbs',{movie})
        })
})

router.get('/movies/new', (req,res)=>{
    MovieModel.find()
    .then((movie)=>{
        res.render('movies/new.hbs',{movie})
    })
})

router.post('/movies', (req,res)=>{
    MovieModel.create(req.body)
        .then(()=>{
            res.redirect('\movies')
        })
        .catch(()=>{
            res.render('movies/new.hbs')
        })
})


router.get('/movies/:id', (req,res)=>{
    MovieModel.findById(req.params.id)
        .then((movies)=>{
            res.render('movies/show.hbs',{movies})
        })
})

router.post('/movies/:id/delete', (req,res)=>{
    MovieModel.findByIdAndDelete(req.params.id)
        .then((movie)=>{
            res.redirect('..') })
        .catch(()=>{
            next()
        })
})

    
module.exports = router;
