import axios from 'axios' ;


export const GET_ALL_RECIPES = "GET_ALL_RECIPES";

export const getAllRecipes = () => async (dispatch) => {
  const {data} = await axios.get("http://localhost:3001/allRecipes");
  dispatch({
    type: GET_ALL_RECIPES,
    payload: data,
  });
};

export const postRecipe = (payload) => async () => {
  const newRecipe = await axios.post("http://localhost:3001/recipe",payload)
  return newRecipe
}