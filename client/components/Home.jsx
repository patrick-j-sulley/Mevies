import React from 'react'
import { connect } from 'react-redux'

import { movieWatchedThunk } from '../actions/movies'

function Home (props) {

  const { movies, dispatch } = props

  const toWatch = movies.filter(movie => !movie.watched)
  const haveWatched = movies.filter(movie => movie.watched)

  const clickHandler = (id) => {
    dispatch(movieWatchedThunk(id))
  }

  return (
    <>
      <h3>Home</h3>
      <p>To watch:</p>
      <ul>
        {toWatch.map(movie => <li key={movie.id}>{movie.title}<button onClick={() => clickHandler(movie.id)}>Watched</button></li>)}
      </ul>
      
      <p>Have watched:</p>
      <ul>
        {haveWatched.map(movie => <li key={movie.id}>{movie.title}</li>)}
      </ul>
    </>
  )
}

function mapReduxToProps (globalState){
  return {
    movies: globalState.movies
  }
}

export default connect(mapReduxToProps)(Home)
