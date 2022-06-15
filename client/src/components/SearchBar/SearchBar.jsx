import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
import { findByName } from "../../redux/action";
import '../SearchBar/SearchBar.css'

const SearchBar = () => {
  const [input, setInput]= useState('')
  const dispatch = useDispatch()
  // const history = useHistory()

  const handleOnSubmit = (e)=>{
    e.preventDefault()
    if(input=== '') return ;
    dispatch(findByName(input))
    setInput('')
    // history.push('/home')
  }
  const handleOnChange = (e)=>{
    setInput(e.target.value)
  }
  
  return (
    <div>
      <form >
        <input type="text" placeholder="Search your recipe..." onChange={handleOnChange} value={input}  className={'search'} />
        <button  className={'search_button'}  onClick={handleOnSubmit} >🔍︎</button>
      </form>
    </div>
  );
};

export default SearchBar;
