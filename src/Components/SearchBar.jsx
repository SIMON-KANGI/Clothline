import React, {useState} from 'react'
import {BiSearchAlt2} from 'react-icons/bi'
import './Styles/NavBar.css'
const SearchBar=({setResults})=> {
  const [input, setInput]= useState("");

 const getData=(value)=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => console.log(json))
  const results= json.filter((user)=>{
    return value && user && user.name && user.name.toLowerCase().includes(value)
  });
  setResults(results)
}
const handleChange=(value)=>{
  setInput(value);
  getData(value);

}
  return (
    <div className='input-wrapper' style={{display:"flex", width:"100%"}}>
    <div className='search-bar-container' style={{width:"100%", backgroundColor:"white",borderRadius:"0.4rem", height:"2.5rem", display:"flex", marginTop:"2.5rem",marginLeft:"1rem", border:"solid 1.5px"}}>
    <BiSearchAlt2 style={{fontSize:"2rem"}}/>
    <input onChange={(e) => handleChange(e.target.value)} style={{height:"2.5rem", width:"100%", marginLeft:"1rem",  border: "none"}} value={input}  type="text" id="search"  placeholder="Search products, brands and categories"/>

    </div>
    <button style={{height:"2.5rem", marginTop:"2.5rem", marginLeft:"0.5rem"}} className='btn btn-info'>Search</button>
    </div>
  )
}

export default SearchBar
