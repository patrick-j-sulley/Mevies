const express = require('express')
const router = express.Router()

const db = require('../db/dbFuncs')

router.get('/', (req, res) => {
    // res.json({worked: true})
    db.getAllMovies()
        .then(movies => {
            movies.forEach(movie => {
                movie.watched = Boolean(movie.watch)
            })
            res.json(movies)
        })
})

module.exports = router