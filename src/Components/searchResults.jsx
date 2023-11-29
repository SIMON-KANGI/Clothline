import React from 'react'
import './styles/search.css'
import searchList from './searchList'
function SearchResults({results}) {
  return (
    <div>
      <div className='results'>
      {
        results.map((result, id) =>{
return <searchList results={results} key={id}/>

        })
      }
      </div>
    </div>
  )
}

export default SearchResults
