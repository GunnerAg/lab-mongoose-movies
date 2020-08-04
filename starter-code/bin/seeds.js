const mongoose = require('mongoose');
// const CelebModel = require('../models/celebrity');
const MovieModel = require('../models/movies')

mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


let InitialCelebs =[
  {
    name: 'Manish',
    ocupation:'Hacker',
    catchPhrase:'That is not my age',
  },
  {
    name: 'Jorge',
    ocupation: 'Feedbacker',
    catchPhrase: 'Keep up the good work',
  },
  {
    name: 'Gunner',
    ocupation: 'Scamer',
    catchPhrase:'I promise you im famous!',
  }
]
//-----------------------------//
let InitialMovies =[
  {
    title: 'Indiana Jorges', 
    genre: 'Action',
    plot: 'In this adventure Mr Jorge has to face an adventure to find the missing parentesis, he would face the god of debug and the army of typos to find it',
  },
  {
    title: 'Manishmagedon',
    genre: 'Action',
    plot: 'There is a Zombie apocalipse and only Manish could save the world, It is the MANISHMAGEDON!',
  },
  {
    title: 'The Hacker',
    genre: 'Thriller',
    plot: 'In 2030 the Hacker known as Gunner would try to change the world, If he dosent forget that last bracket.'
  }
]

// CelebModel.create(InitialCelebs)
//         .then((response)=>{
//           console.log(response)
//         })
//         .catch((err)=>{
//           console.error("Error: can not render the values", err)
//         })

MovieModel.create(InitialMovies)
  .then((response)=>{
      console.log(response)
  })
  .catch((err)=>{
     console.error("Error: can not render the values", err)
  })