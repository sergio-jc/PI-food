import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes } from "../../redux/action";
import {Link} from 'react-router-dom'
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
          <Link to={`/detail/${id}`}>
          <div key={`card_id_${id}`} className='card'>
            <h3 key={`name_id_${id}`}>{name}</h3>
            <h2 key={`score_id_${id}`}>{healthScore}</h2>
            <div>
              <h3>Diets :</h3>
            {diets.length && typeof diets[0] === "string"
              ? diets.map((e , i) => <span key={`diet_id_${i}`}>{e}</span>)
              : diets.map((e , i) => <span key={`diet_id_${i}`}>{e.name}</span>)}
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


{/* <Link to={`/detail/${id}`}>
          <div key={`card_id_${id}`} className='card'>
            <h3 key={`name_id_${id}`}>{name}</h3>
            <h2 key={`score_id_${id}`}>{healthScore}</h2>
            <div>
              <h3>Diets :</h3>
            {diets.length && typeof diets[0] === "string"
              ? diets.map((e , i) => <span key={`diet_id_${i}`}>{e}</span>)
              : diets.map((e , i) => <span key={`diet_id_${i}`}>{e.name}</span>)}
            </div>
            <img key={`img_id_${id}`} src={image} alt="s" className="image" />
          </div>
              </Link> */}