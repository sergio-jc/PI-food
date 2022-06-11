import React, {useState,useEffect } from "react";
import Cards from "./Cards/Cards";
import SearchBar from "./SearchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { findByName, getAllRecipes } from "../redux/action";

const Home = () => {
  const dispatch = useDispatch();
  const findRecipe = useSelector((state) => state.findRecipe);
  const [input , setInput] = useState('')
  const [validate , setValidate] = useState('')
  const allRecipes = useSelector((state) => state.recipes);
  useEffect(() => {
      dispatch(getAllRecipes());
      dispatch(findByName(validate))
    }, [dispatch, validate]);
    console.log(input , 'input')
    console.log(findRecipe, 'query')
    console.log(allRecipes , 'all')
  return (
    <div>
      <SearchBar input={input}  setInput={setInput} setValidate={setValidate} />
      <Cards allRecipes={allRecipes} findRecipe={findRecipe} />
    </div>
  );
};
export default Home;
