import React  from  "react";

function Search({onSearch}) {
  
  function handleChange(e){
    e.preventDefault()
    
    onSearch(document.getElementById("search-bar").value)
  }
  
  console.log()
  return (
    <div className="filter">
      <input id="search-bar" type="text"  onChange={handleChange} placeholder="Search Notes" />
    </div>
  );
}

export default Search;
