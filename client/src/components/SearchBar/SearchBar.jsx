import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { findByName } from "../../redux/action";
const SearchBar = () => {
  const [input, setInput]= useState('')
  const dispatch = useDispatch()

  const handleOnSubmit = (e)=>{
    e.preventDefault()
    if(input=== '') return ;
    dispatch(findByName(input))
    setInput('')
  }
  const handleOnChange = (e)=>{
    setInput(e.target.value)
  }
  
  return (
    <div>
      <form >
        <input type="text" placeholder="Recipe..." onChange={handleOnChange} value={input}/>
        <button  onClick={handleOnSubmit} >🔍</button>
      </form>
    </div>
  );
};

export default SearchBar;
