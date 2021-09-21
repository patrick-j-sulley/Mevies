// react & redux imports
import React from 'react'
import { connect } from 'react-redux'

// components
import AddMovie from './AddMovie'

// thunks
import { movieWatchedThunk } from '../actions/movies'

function Home(props) {

  const { movies, dispatch } = props

  const toWatch = movies.filter(movie => !movie.watched)
  const haveWatched = movies.filter(movie => movie.watched)

  const clickHandler = (id) => {
    dispatch(movieWatchedThunk(id))
  }

  return (
    <>
      <h3>Home</h3>
      <AddMovie/>
      <p>To watch:</p>
      <ul>
        {toWatch.map(movie => 
        <li key={movie.id}>
          <p>{movie.title}</p>
          <p>{movie.description}</p>
          <img src={movie.image} className='results-img'/>
          <p>{movie.watched}</p>
          <p>{movie.rating}</p>
          <p><button onClick={() => clickHandler(movie.id)}>Watched</button></p>
          </li>)}
      </ul>

      <p>Have watched:</p>
      <ul>
        {haveWatched.map(movie => <li key={movie.id}>
          <p>{movie.title}</p>
          <p>{movie.description}</p>
          <img src={movie.image} className='results-img'/>
          <p>{movie.watched}</p>
          <p>Rating: {movie.rating}</p></li>)}
      </ul>
    </>
  )
}

function mapReduxToProps(globalState) {
  return {
    movies: globalState.movies
  }
}

export default connect(mapReduxToProps)(Home)
