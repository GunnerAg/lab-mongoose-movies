const mongoose = require('mongoose');

let CelebritySchema = new mongoose.Schema({
    name: String, 
    ocupation: String,
    catchPhrase: String

})

let CelebModel = mongoose.model('celeb-model', CelebritySchema);

module.exports =  CelebModel;