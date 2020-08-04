const mongoose = require('mongoose');

let MovieSchema = new mongoose.Schema({
    title: String, 
    genre: String,
    plot: String,
})

let MovieModel = mongoose.model('MovieModel', MovieSchema);

module.exports =  MovieModel;