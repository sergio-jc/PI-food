import React from "react";

const RecipeDetail = (props) => {
  return (
    <div>
      RecipeCard
      <h3>{props.name}</h3>
      <h3>{props.healthScore}</h3>
      <p>{props.summary?.replace(/['\']/g, " ")}</p>

        {props.analyzedInstructions.length && (
          <div>
            <h3>STEPS:</h3>
            {props.analyzedInstructions.map((e) => (
              <p>{e}</p>
            ))}
          </div>
        )}
      
      {props.diets.length && (
        <div>
          <ul>
            DIETS:
            {props.diets.map((e) => (
              <li>{e}</li>
            ))}
          </ul>
        </div>
      )}

      {props.dishTypes.length && (
        <div>
          <ul>
            DISH TYPES :
            {props.dishTypes.map((e) => (
              <li>{e}</li>
            ))}
          </ul>
        </div>
      )}

      <div>
        <img src={props.image} alt="image of the recipe" />
      </div>
      
    </div>
  );
};

export default RecipeDetail;
