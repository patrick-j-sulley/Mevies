import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

function AddRating(props) {

  const { dispatch } = props

  const [ratingsIsVisible, setRatingsVisible] = useState(false)

  const toggleRatings = () => {
    setRatingsVisible(!ratingsIsVisible)
    }


  return (
    <>
      {ratingsIsVisible ? <><button>👍</button><button>👎</button><button onClick={toggleRatings}>Close</button></>: <><button onClick={toggleRatings}>Rating</button></>}
    </>
  )
}

export default connect()(AddRating)
