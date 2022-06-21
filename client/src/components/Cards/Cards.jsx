import React from "react";
import { Link } from "react-router-dom";
import "./CardsRecipes.css";
import Loading from "./Loading/Loading";
import Error from "./Error/Error";
const Cards = ({ actualPage, loader }) => {
  let display;
  if (loader) {
    return <Loading />;
  }
  if (typeof actualPage === "object") {
    display = actualPage.map(({ id, name, healthScore, diets, image }, i) => {
      return (
        <div key={`card ${id}-${i}`} className="container">
          <div className="card">
            <div className="img_score">
            <Link to={`/detail/${id}`}>
              <img src={image} alt="receta rica rica" className="image" />
            </Link>
            <div className="score">{healthScore}</div>
            </div>
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

                
              </div>
            </div>
          </div>
        </div>
      );
    });
  } else {
    display = <Error />;
  }
  return !actualPage.length ? (
    <Loading />
  ) : (
    <div className="fund">{display}</div>
  );
};

export default Cards;

//? nota mental xd bueno para mi ti mi yo del futuro tengo suemio pero  encontre un mensaje para la pag de error (we can't seem to find the page you're looking for) asi que vamos a usarlo gracias por esforzarte tanto te quiero y te mereces todo el mundo gracias por hacer esto por ti estudiar divertirte aprender te quiero y aprecio mucho todo esta bien como ves xd pasamos muchas cosas que nos hicieron llorar hasta mas no poder pero ahora estas aqui gracias por recistir tanto , te mereces todo el amor que tengo sigue asi lucha por tus suenios que se que se cumpliran y se un estupendo programador te quiero mucho atentamente el mundo y tu y yo  y todos .
