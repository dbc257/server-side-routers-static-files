let express = require('express')
let router = express.Router() 
// * localhost:3000/movies - View all movies (Show the poster image and the name of the movie on this age) 
router.get('/', (req, res) => {
    res.render('movies', { movies: movies })
})
// * localhost:3000/movies/create - POST - Add a new movie 
router.post('/create', (req, res) => {
    let title = req.body.title
    let description = req.body.description
    let genre = req.body.genre
    let posterURL = req.body.posterURL
    let movie = { title: title, description: description, genre: genre, posterURL: posterURL }
    movies.push(movie)
    res.render('create', { title: title })

})
// * localhost:3000/movies/delete - POST - Deletes a movie
router.post('/delete', (req, res) => {
    let title = req.body.title
    movies = movies.filter(movie => movie.title != title)
    res.redirect('/movies')
})
// display create.mustache page 
router.get('/create', (req, res) => {
    res.render('create')
}) 
// * /movies/:movieId - Details about the movie 
//     (Show poster image, title, genre and description 
//         on this page) 
router.get('/:movieId', (req,res) => {
    let movieID = req.params.movieId
    let movieDetails = movies.filter(movie => movie.title == movieID)
    res.render('details', movieDetails[0])
})

// * /movies/genre/:genre - Show movies based on genre 
router.get('/genre/:genre', (req,res) => {
    let movieGenre = req.params.genre
    let movieGenres = movies.filter(movie => movie.genre == movieGenre)
    res.render('movies', {movies: movieGenres })
})
// Expose all your movies by creating a Web API route at /api/movies which 
//     should return all the movies in JSON format. 
router.get('/api/movies', (req,res) => {
   res.json(movies)
})

module.exports = router 