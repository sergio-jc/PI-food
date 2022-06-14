import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./CardsRecipes.css";
import { getAllRecipes } from "../../redux/action";
const Cards = ({ actualPage }) => {
  const dispatch = useDispatch();
  let display;
  if (typeof actualPage === "object") {
    display = actualPage.map(({ id, name, healthScore, diets, image }, i) => {
      return (
        <Link key={`card ${id}-${i}`} to={`/detail/${id}`}>
          <div className="container">
            <div className="card">
              <figure>
                <img src={image} alt="receta rica rica" className="image" />
              </figure>
              <div className="contenido">
                <h4 >{name}</h4>
                <h4 >{healthScore}</h4>
                <div>
                  <ul>
                    {diets &&
                      diets.map((e, i) => {
                        return <li key={`list ${i} card ${id}`}>{e}</li>;
                      })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Link>
      );
    });
  } else {
    display = (
      <div>
        <h1>Error</h1>
        <button onClick={(e) => dispatch(getAllRecipes())}>
          ver todas las cartas
        </button>
      </div>
    );
  }
  return !actualPage.length ? (
    <h1>loading</h1>
  ) : (
    <div className="fund">{display}</div>
  );
};

export default Cards;
