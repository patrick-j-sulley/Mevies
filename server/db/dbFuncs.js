const connection = require('./connection')

function getAllMovies (db = connection) {
    return db('movies')
    .select()
}

module.exports = {
    getAllMovies
}