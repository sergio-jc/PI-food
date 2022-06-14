import React, { useState, useEffect } from "react";
import Cards from "../Cards/Cards";
import SearchBar from "../SearchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByDiet,
  findByName,
  getAllRecipes,
  getAllTypes,
} from "../../redux/action";
// import { orderA, orderMax, orderMin, orderZ } from "./func/Sort.js";
import Order from "../Button/Order/Order";
const Home = () => {
  const dispatch = useDispatch();
  // const typesDiets = useSelector((state) => state.allDiets);


  // const [button, setButton] = useState(true);
  // const [MaxMin, setMaxMin] = useState(true);
  // const [selectDiet, setSelect] = useState("");
  // button
  //   ? (allRecipes = orderA(allRecipes))
  //   : (allRecipes = orderZ(allRecipes));
  // MaxMin
  //   ? (allRecipes = orderMax(allRecipes))
  //   : (allRecipes = orderMin(allRecipes));
    
  //   const handleOnSelect = (e) => {
  //     setSelect(e.target.value);
  //   };
  
  //   const onSubmitSelect = (e) => {
  //     console.log(selectDiet);
  //     e.preventDefault()
  //     dispatch(filterByDiet(selectDiet));
  //   };
  useEffect(() => {
    setTimeout(()=>{
      dispatch(getAllRecipes());
      dispatch(getAllTypes());
    },1000)
  }, [dispatch]);

  return (
    <div>
      <SearchBar/>
      <Order/>
      {/* <div>
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

          <select
            name="filter"
            value={selectDiet}
            id="filter"
            onChange={handleOnSelect}
          >
            <option  onClick={onSubmitSelect} value="recipes">Recipes</option>
            {typesDiets.map((e, i) => (
              <option key={`opc.${i}`} value={e} onClick={onSubmitSelect}>
                {e}
              </option>
            ))}
          </select>
        </div>
      </div> */}

      <Cards/>
    </div>
  );
};
export default Home;
