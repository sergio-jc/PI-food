import React from "react";

const RecipeCard = (props) => {
  return (
    <div>
      RecipeCard
      <h3>{props.name}</h3>
      {props.diets?.map(e=>(<li></li>))}
    </div>
  );
};

export default RecipeCard;
