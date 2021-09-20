import { fetchAllMovies } from '../apis/movies'

export const SAVE_ALL_MOVIES = 'SAVE_ALL_MOVIES'

// ACTION CREATORS

function saveAllMovies (movies) {
    return {
        type: SAVE_ALL_MOVIES,
        movies: movies
    }
}


// THUNKS

export const getAllMoviesThunk = () => {
    return (dispatch) => {
        fetchAllMovies()
        .then(movies => {
            dispatch(saveAllMovies(movies))
        })
    }
}