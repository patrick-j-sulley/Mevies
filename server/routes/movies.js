const express = require('express')
const router = express.Router()

const db = require('../db/dbFuncs')

router.get('/', (req, res) => {
    // res.json({worked: true})
    db.getAllMovies()
        .then(movies => {
            movies.forEach(movie => {
                movie.watched = Boolean(movie.watched)
            })
            res.json(movies)
        })
})

router.patch('/:id', (req, res) => {

    const { id } = req.params
    // .send({watched:true})
    db.updateMovie(id, req.body)
        .then((numOfUpdates) => {
            const itWorked = numOfUpdates === 1
            res.json({itWorked})
            })
        })

module.exports = router