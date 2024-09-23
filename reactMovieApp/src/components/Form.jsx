import {React, useState, useEffect} from 'react'

function Form({movieSearch}){
  const [formData, setFormData]= useState({
    searchTerm: ""
  })


  const handleChange = (evt) => {
  setFormData({
    ...formData,
    [evt.target.name]: evt.target.value
  })
}

  const handleSubmit = (evt) => {
  evt.preventDefault()
  movieSearch(formData.searchTerm)
}


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" 
        className="searchbar" 
        name="searchTerm" 
        onChange={handleChange} 
        value={formData.searchTerm} />

        <input 
        type="submit" 
        value="submit" 
        className="submitBtn" />

      </form>
    
    
    </>
  )
}

export default Form