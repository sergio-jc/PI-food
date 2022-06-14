import React from "react";
import { Link } from "react-router-dom";
import { useSelector , useDispatch} from "react-redux";
import "./CardsRecipes.css";
import { getAllRecipes } from "../../redux/action";
const Cards = () => {
  const dispatch = useDispatch()
  const recipes = useSelector ((state) => state.recipes)
  let display
  if(typeof(recipes)==='object'){
    display = recipes.map (({id,name,healthScore,diets,image},i)=>{
      return(
      <Link key={`card ${id}-${i}`} to={`/detail/${id}`}>
      <div className="card" >
        <h4>{name}</h4>
        <h4>{healthScore}</h4>
        <div>
          <ul >
            {diets && diets.map((e,i)=>{
             return (<li key={`list ${i} card ${id}`}>{e}</li>)
            })}
          </ul>
        </div>
        <div>
        <img src={image} alt="receta rica rica"  className="image"/>
      </div>
      </div>
    </Link>
    )})
  } else {
    display = (
      <div>
        <h1>Error</h1>
        <button onClick={(e)=>dispatch(getAllRecipes())}>ver todas las cartas</button>
      </div>
    )
  }
   return ( !recipes.length ?  <h1>loading</h1>  : <div className="fund">{display}</div>)
};

export default Cards;

