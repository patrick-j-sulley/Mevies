import React, { useState } from 'react'
import { connect } from 'react-redux'

import { searchImdb } from '../apis/imdb'

import { addMovie }  from '../actions/movies'

function AddMovie(props) {
    
    const { dispatch } = props

    const [formIsVisible, setFormVisible] = useState(false)
    const [searchTerm, setSearch] = useState('')
    const [searchResults, setResults] = useState([])

    const toggleForm = () => {
        setFormVisible(!formIsVisible)
    }

    const handleTyping = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        searchImdb(searchTerm)
            .then(res => {
                console.log(res)
                setResults(res)
            })
    }

    const renderForm = () => {
        return <form onSubmit={handleSubmit}>
            <label htmlFor='title'>Search</label>
            <input type='text' id='title' onChange={handleTyping} />
            <button>🔍</button>
        </form>
    }
    
    const saveMovie = (movie) => {
        // const {id, title, description, image} = movie
        dispatch(addMovie(movie.id, movie.title , movie.description, movie.image))
    }

    const renderList = () => {
        return <div>
            <ul>
                {searchResults.map(movie =>
                <> 
                <li key={movie.id}>
                <p>{movie.title}</p>
                <p>{movie.description}</p>
                <img src={movie.image} className='results-img'/>
                <p><button key={movie.id} onClick={() => saveMovie(movie)}>➕</button></p></li></>)}
            </ul>
        </div>
    }

    

    return (
        <>
            <h3>Add Movie</h3>
            {formIsVisible
                ?
                <>
                    <div>
                        {renderForm()} <button onClick={toggleForm}>Close</button>
                    </div>
                    {renderList()}
                </>
                :
                <button onClick={toggleForm}>🔍</button>}
        </>
    )
}

export default connect()(AddMovie)

