const express = require('express')
const app = express()
const moviesRouter = require('./routes/movies')
// console.log(moviesRouter)
const mustacheExpress = require('mustache-express') 
app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

// localhost:3000/movies/styles.css
app.use('/movies',express.static('css'))
// localhost:3000/js/client.js
// app.use(express.static('public'))

global.movies = [] // global variable which can be used in other routing files 
app.use(express.urlencoded()) // for parsing form submitted data 
app.use('/movies',moviesRouter)

app.listen(3000, () => {
    console.log('Server has started')
})