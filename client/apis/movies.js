import request from 'superagent'

export const fetchAllMovies = () => {
    return request
        .get('/api/v1/movies/')
        .then(response => response.body)
}