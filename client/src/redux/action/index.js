import axios from 'axios' ;
import { arrayDiets } from '../../components/Form/func/funcAux.js';
export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const GET_ALL_TYPES = "GET_ALL_TYPES";
export const GET_ALL_DISH_TYPES ="GET_ALL_DISH_TYPES"

export const getAllRecipes = () => async (dispatch) => {
  const {data} = await axios.get("http://localhost:3001/allRecipes");
  dispatch({
    type: GET_ALL_RECIPES,
    payload: data,
  });
};

export const getAllTypes = () => async (dispatch) =>{
  const {data} = await axios.get("http://localhost:3001/type");
  dispatch({
    type: GET_ALL_TYPES,
    payload: data.map(e=>e.name),
  });
}

export const getAllDishTypes = () => async (dispatch) =>{
  const {data} = await axios.get("http://localhost:3001/dishTypes");
  dispatch({
    type : GET_ALL_DISH_TYPES,
    payload : data
  })
}

export const postRecipe = (input, checkedState , allDiets) => async () => {
  const newRecipe = {
    name: input.name,
    diets: arrayDiets(checkedState , allDiets),
    healthScore : input.healthScore,
    summary : input.summary,
    image : input.image,
    analyzedInstructions : input.analyzedInstructions
  };
  console.log(newRecipe)
  axios.post("http://localhost:3001/recipe",  newRecipe ).then((res) => {
    console.log(res);
    console.log(res.data);
  });
}
