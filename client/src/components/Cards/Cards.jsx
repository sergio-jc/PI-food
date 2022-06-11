import React from "react";
import { Link } from "react-router-dom";
import "./CardsRecipes.css";
const Cards = ({allRecipes , findRecipe}) => {
  
  let recipes = typeof(findRecipe) === 'string' ? allRecipes : findRecipe
  let display;
  if (recipes) {
    display = recipes.map(({ id, name, image, healthScore, diets }) => {
      return (
        <Link to={`/detail/${id}`}>
          <div key={`card_id_${id}`} className="card">
            <h3 key={`name_id_${id}`}>{name}</h3>
            <h2 key={`score_id_${id}`}>{healthScore}</h2>
            <div>
              <h3>Diets :</h3>
              {diets.length && typeof diets[0] === "string"
                ? diets.map((e, i) => <span key={`diet_id_${i}`}>{e}</span>)
                : diets.map((e, i) => (
                    <span key={`diet_id_${i}`}>{e.name}</span>
                  ))}
            </div>
            <img key={`img_id_${id}`} src={image} alt="s" className="image" />
          </div>
        </Link>
      );
    });
  } else {
    display = "Recipes not found";
  }
  return <div className="fund">{display}</div>;
};

export default Cards;

