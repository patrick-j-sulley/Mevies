import React from 'react'
import { connect } from 'react-redux'

function Home (props) {

  const { movies } = props

  return (
    <>
      <h3>Home</h3>
      <p>To watch:</p>
      <ul>
        {movies.map(movie => <li>{movie.title}</li>)}
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
