import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'
import MovieView from './MovieView'

function App() {

  return (
    <>
      <h1>App</h1>
      <Route exact path='/' component={Home} />
      <Route path='/movie/:id' component={MovieView} />
    </>
  )
}

export default App
