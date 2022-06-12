import React, { useState, useEffect } from "react";
import Cards from "../Cards/Cards";
import SearchBar from "../SearchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { findByName, getAllRecipes , getAllTypes } from "../../redux/action";
import { orderA, orderMax, orderMin, orderZ } from "./func/Sort.js";
const Home = () => {
  const dispatch = useDispatch();
  const findRecipe = useSelector((state) => state.findRecipe);
  const typesDiets = useSelector((state)=> state.allDiets)
  const [input, setInput] = useState("");
  const [validate, setValidate] = useState("");
  let allRecipes = useSelector((state) => state.recipes);
  const [button, setButton] = useState(true);
  const [MaxMin, setMaxMin] = useState(true);
  console.log(MaxMin);
  useEffect(() => {
    dispatch(getAllRecipes());
    dispatch(findByName(validate));
    dispatch(getAllTypes())
  }, [dispatch, validate]);
  button
    ? (allRecipes = orderA(allRecipes))
    : (allRecipes = orderZ(allRecipes));
  MaxMin
    ? (allRecipes = orderMax(allRecipes))
    : (allRecipes = orderMin(allRecipes));

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
            {button ? "A-Z" : "Z-A"}
          </button>
        </div>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              setMaxMin(!MaxMin);
            }}
          >
            {MaxMin ? "Max" : "Min"}
          </button>
          <label>Diets</label>
          <label for="filter">Choose a diet:</label>

          <select name="filter" id="filter">
            <option value="recipes">Recipes</option>
            {typesDiets.map((e,i)=>(<option key={`opc.${i}`} value={e} >{e}</option>))}
          </select>
        </div>
      </div>
      <Cards allRecipes={allRecipes} findRecipe={findRecipe} />
    </div>
  );
};
export default Home;
