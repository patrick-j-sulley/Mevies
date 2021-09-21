import request from 'superagent'

export const fetchAllMovies = () => {
    return request
        .get('/api/v1/movies/')
        .then(response => response.body)
}

export const postMovie = (newMovie) => {
    return request
    .post('api/v1/movies/')
    .send(newMovie)
    .then(res => res.body)

}

export const updateMovieWatched = (id) => {
    return request
        .patch(`/api/v1/movies/${id}`)
        .send({watched:true})
        .then(response => response.body)
}