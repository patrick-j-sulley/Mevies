import { MOVIE_WATCHED, SAVE_ALL_MOVIES } from '../actions/movies'

function reducer (state = [], action) {
    switch (action.type) {
        case SAVE_ALL_MOVIES:
            return action.movies
        case MOVIE_WATCHED:
            return state.map(movie => {
                if(movie.id === action.movieId){
                    movie.watched = true
                }
                return movie
            })
        default:
            return state
    }
}

export default reducer