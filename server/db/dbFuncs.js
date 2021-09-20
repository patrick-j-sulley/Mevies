const connection = require('./connection')

function getAllMovies (db = connection) {
    return db('movies')
    .select()
}

function updateMovie (id, newInfo, db = connection){
    return db('movies')
    .update(newInfo)
    .where('id', id)
}

module.exports = {
    getAllMovies,
    updateMovie
}