import { fetchAllMovies, updateMovieWatched } from '../apis/movies'

export const SAVE_ALL_MOVIES = 'SAVE_ALL_MOVIES'
export const MOVIE_WATCHED = 'MOVIE_WATCHED'

// ACTION CREATORS

const saveAllMovies = (movies) => {
    return {
        type: SAVE_ALL_MOVIES,
        movies: movies
    }
}

const movieWatched = (movieId) => {
    return {
        type: MOVIE_WATCHED,
        movieId: movieId
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

export const movieWatchedThunk = (movieId) => {
    return (dispatch) => {
        updateMovieWatched(movieId)
            .then((everythingIsFine) => {
                if (!everythingIsFine) {
                    throw new Error('oops')
                }
                dispatch(movieWatched(movieId))
            })
    }
}