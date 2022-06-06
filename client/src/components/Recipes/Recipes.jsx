import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes } from "../../redux/action";
import RecipeCard from "../RecipeCard/RecipeCard";

const Recipes = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(getAllRecipes());
  }, [dispatch]);

  return (
    <div>
      <h2>RECIPES</h2>
      {recipes.length &&
        recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            name={recipe.name}
            diets={recipe.diets}
            dishTypes={recipe.dishTypes}
            healthScore={recipe.healthScore}
            image={recipe.image}
          />
        ))}
    </div>
  );
};

export default Recipes;
