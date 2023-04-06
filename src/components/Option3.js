import React,{useState} from "react";
/* Create a search component. Have the student implement 
a search feature where the student has to use a controlled 
form in order to create the search 
and filter their list based on the term that was used. */

/* Question: Create a search component where you 
should be using a controlled form in order to create the search and 
you should filter the list based on the searchedTerm */



function Option3({onSearch}) {
    const [formData, setFormData]=useState({
      name:""
    })
    function handleChange(e){
      e.preventDefault()
      console.log(e.target.value)
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
      onSearch(formData.name)
      
    }
    
    
    
    return (
      <div className="filter">
        <form >
        <input id="search-bar" type="text"  value ={formData.name} name="name" onChange={handleChange} placeholder="Search Notes" />
        
        </form>
      </div>
    );
  }
  
  export default Option3;