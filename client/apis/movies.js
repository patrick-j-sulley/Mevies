import request from 'superagent'

export const fetchAllMovies = () => {
    return request
        .get('/api/v1/movies/')
        .then(response => response.body)
}

export const updateMovieWatched = (id) => {
    return request
        .patch(`/api/v1/movies/${id}`)
        .send({watched:true})
        .then(response => response.body)
}