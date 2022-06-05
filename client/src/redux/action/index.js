export const GET_ALL_RECIPES = "GET_ALL_RECIPES";

export const getAllRecipes = () => async (dispatch) => {
  const response = await fetch("http://localhost:3001/allRecipes");
  const json = await response.json();
  dispatch({
    type: GET_ALL_RECIPES,
    payload: json,
  });
};
