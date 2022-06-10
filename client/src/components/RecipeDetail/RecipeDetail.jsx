import React,{useEffect} from "react";
import {useParams} from 'react-router-dom'
import {useSelector, useDispatch} from "react-redux"
import { Detail } from "../../redux/action";

const RecipeDetail = () => {
  const dispatch = useDispatch()
  const {id} = useParams()
  useEffect(()=>{
    dispatch(Detail(id))
  },[dispatch , id])
  const recipe = useSelector((state)=> state.recipeDetail)
  const allDiets = recipe.diets ? recipe.diets.map(e=>{ 
    if(typeof(e)==='string') {return (<h3>{e}</h3>)}
    return (<h3>{e.name}</h3>)
    }) 
    :'hol' 
  return (
    <div>
      RecipeCard
      <h3>{recipe.name}</h3>
      <h3>{allDiets}</h3>
      <h3>{recipe.healthScore}</h3>
      <div>{recipe.summary}</div>
        <div>{recipe.analyzedInstructions?.split(' ✂ ').map((e , i)=> <p key={`step ${i}`}>{e}</p>)}</div>
      <p>{recipe.dishTypes}</p>
      <div>
        <img src={recipe.image} alt=" jkly" />
      </div>
      
    </div>
  );
};

export default RecipeDetail;
