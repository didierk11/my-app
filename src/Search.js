import React from "react";

function handleClick(e) {
  e.preventDefault();
  console.log('The link was clicked.');
}

function Search() {
    return (
      <div>
        <input type="text" className="Search"></input>
        <button onClick={handleClick} >Buscar</button>
      </div>
    );
  }

export default Search;
