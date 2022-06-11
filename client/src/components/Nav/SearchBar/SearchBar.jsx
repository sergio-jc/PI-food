import React, { useState } from "react";
import {useSelector , useDispatch} from 'react-redux'
import { findByName } from "../../../redux/action";

const SearchBar = ( ) => {
  const [recipe, setRecipe] = useState("");
  const searchRecipe =useSelector((state)=>state.findRecipe)
  const dispatch = useDispatch()
  console.log(recipe)
  console.log(searchRecipe)
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(findByName(recipe))
        }}
      >
        <input
          type="text"
          placeholder="Recipe..."
          value={recipe}
          onChange={(e) => setRecipe(e.target.value)}
        />
        <input type="submit" value="🔍" />
      </form>
    </div>
  );
};

export default SearchBar;
