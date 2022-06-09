import axios from 'axios' ;
import { arrayDiets } from '../../components/Form/func/funcAux.js';
export const GET_ALL_RECIPES = "GET_ALL_RECIPES";

export const getAllRecipes = () => async (dispatch) => {
  const {data} = await axios.get("http://localhost:3001/allRecipes");
  dispatch({
    type: GET_ALL_RECIPES,
    payload: data,
  });
};

export const postRecipe = (input, checkedState) => async () => {

  const newRecipe = {
    name: input.name,
    diets: arrayDiets(checkedState),
  };
  console.log(newRecipe)
  axios.post("http://localhost:3001/recipe",  newRecipe ).then((res) => {
    console.log(res);
    console.log(res.data);
  });
}
