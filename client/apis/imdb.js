import request from 'superagent'

const apiKey = process.env.API_KEY

const baseUrl = `https://imdb-api.com/en/API/`

export const searchImdb = (searchTerm) => {
    return request
    .get(`${baseUrl}SearchMovie/${apiKey}/${searchTerm}`)
    .then(res => res.body.results)

}