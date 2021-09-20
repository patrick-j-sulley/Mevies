import { SAVE_ALL_MOVIES } from '../actions/movies'

function reducer (state = [], action) {
    switch (action.type) {
        case SAVE_ALL_MOVIES:
            return action.movies
        default:
            return state
    }
}

export default reducer