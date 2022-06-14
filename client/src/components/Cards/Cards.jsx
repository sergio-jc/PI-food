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
          <div key={`card ${id}-${i}`}  className="container">
            <div className="card">
            <Link to={`/detail/${id}`}>
              <img src={image} alt="receta rica rica" className="image" />
              </Link>
              <div className="contenido">
                <div className="name">
                  <h4>{name}</h4>
                </div>
                <div className="datos">
                  <div className="diets">
                    <ul>
                      {diets &&
                        diets.map((e, i) => {
                          return <li key={`list ${i} card ${id}`}>{e}</li>;
                        })}
                    </ul>
                  </div>

                  <div className="score">
                   {healthScore}
                  </div>
                </div>
              </div>
            </div>
          </div>
        
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
