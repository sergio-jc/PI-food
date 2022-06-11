import React, { useState, useEffect } from "react";
import Cards from "../Cards/Cards";
import SearchBar from "../SearchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { findByName, getAllRecipes } from "../../redux/action";
import { orderA, orderZ } from "./func/Sort.js";
const Home = () => {
  const dispatch = useDispatch();
  const findRecipe = useSelector((state) => state.findRecipe);
  const [input, setInput] = useState("");
  const [validate, setValidate] = useState("");
  let allRecipes = useSelector((state) => state.recipes);
  const [button, setButton] = useState(true);
  useEffect(() => {
    dispatch(getAllRecipes());
    dispatch(findByName(validate));
  }, [dispatch, validate]);
  button
    ? (allRecipes= orderA(allRecipes))
    : (allRecipes = orderZ(allRecipes));

  return (
    <div>
      <div>
        <SearchBar
          input={input}
          setInput={setInput}
          setValidate={setValidate}
        />
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              setButton(!button);
            }}
          >
           {button? 'A-Z' : 'Z-A'}
          </button>
        </div>
      </div>
      <Cards allRecipes={allRecipes} findRecipe={findRecipe} />
    </div>
  );
};
export default Home;
