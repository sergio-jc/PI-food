import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes } from "../../redux/action";
import '../AllRecipes/CardsRecipes.css'
const Cards = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRecipes());
  }, [dispatch]);

  const allRecipes = useSelector((state) => state.recipes);

  let display;
  if (allRecipes) {
    display = allRecipes.map(({ id, name, image, healthScore, diets }) => {
      return (
        <>
          <div key={id} className='card'>
            <h3>{name}</h3>
            <h2>{healthScore}</h2>
            <div>
              <h3>Diets :</h3>
            {diets.length && typeof diets[0] === "string"
              ? diets.map((e) => <p>{e}</p>)
              : diets.map((e) => <p>{e.name}</p>)}
            </div>
            <img src={image} alt="s" />
          </div>
        </>
      );
    });
  } else {
    display = "Recipes not found";
  }
  return <div className="fund">{display}</div>;
};

export default Cards;
