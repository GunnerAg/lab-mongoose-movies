const express = require('express')
const router = express.Router()
const CelebModel = require('../models/celebrity')

router.get('/celebrities', (req,res)=>{
    CelebModel.find()
        .then((celebs)=>{
            res.render('celebrities/index.hbs',{celebs})
        })
})

router.get('/celebrities/new', (req,res)=>{
    CelebModel.find()
    .then((info)=>{
        res.render('celebrities/new.hbs',{info})
    })
})

router.post('/celebrities', (req,res)=>{
    CelebModel.create(req.body)
        .then((celebs)=>{
            res.redirect('\celebrities')
        })
        .catch(()=>{
            res.render('celebrities/new.hbs')
        })
})


router.get('/celebrities/:id', (req,res)=>{
    CelebModel.findById(req.params.id)
        .then((celebs)=>{
            res.render('celebrities/show.hbs',{celebs})
        })
})

router.post('/celebrities/:id/delete', (req,res)=>{
    CelebModel.findByIdAndDelete(req.params.id)
        .then((celebs)=>{
            res.redirect('..') })
        .catch(()=>{
            next()
        })
})

    
module.exports = router;
