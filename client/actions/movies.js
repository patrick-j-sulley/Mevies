import { fetchAllMovies, postMovie, updateMovieWatched } from '../apis/movies'

export const SAVE_ALL_MOVIES = 'SAVE_ALL_MOVIES'
export const MOVIE_WATCHED = 'MOVIE_WATCHED'
export const SAVE_ONE_MOVIE = 'SAVE_ONE_MOVIE'

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

const saveOneMovie = (movie) => {
    return {
        type: SAVE_ONE_MOVIE,
        movie
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

export const addMovie = (id, title, description, image) => {

        const newMovie = {
            title,
            description,
            image,
            imdb_id: id,
            watched: 0,
            rating: null
        }

        return (dispatch) => {
            postMovie(newMovie)
            .then((obj) => {
                const { newId } = obj
                newMovie.id = newId
                dispatch(saveOneMovie(newMovie))
            })
        }
    }

