import React from "react";

const SearchBar = ({ input ,setInput , setValidate}) => {
  const handleOnSubmit = (e)=>{
    e.preventDefault()
    setValidate(input)
    input === '' && alert ('lo sentimos no se encontro la receta')
  }

  const handleOnChange = (e)=>{
    setInput(e.target.value)
  }
  
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input type="text" placeholder="Recipe..." onChange={handleOnChange} />
        <input type="submit" value="🔍" />
      </form>
    </div>
  );
};

export default SearchBar;
