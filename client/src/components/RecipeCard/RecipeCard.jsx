import React from "react";

const RecipeCard = (props) => {
  return (
    <div>
      RecipeCard
      <h3>{props.name}</h3>
      <h3>{props.healthScore}</h3>
      {props.diets.length && 
      <ul>
        DIETS:
        {props.diets.map((e) => <li>{e}</li>)}
      </ul>
      }
     {
        props.dishTypes.length && 
        <ul>
          DISH TYPES :
          {props.dishTypes.map((e) => <li>{e}</li>)}
        </ul>
      }
      <div>
        <img src={props.image} alt='image of the recipe'/>
      </div>
    </div>
  );
};

export default RecipeCard;

//name ----
//summary---------
//image----
//diets--------
//dishTypes----------
//healthScore------
//analyzedInstructions -------
