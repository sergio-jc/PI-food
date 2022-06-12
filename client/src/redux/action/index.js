import axios from "axios";
import { arrayDiets } from "../../components/Form/func/funcAux.js";
export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const GET_ALL_TYPES = "GET_ALL_TYPES";
export const GET_ALL_DISH_TYPES = "GET_ALL_DISH_TYPES";
export const FIND_BY_NAME = "FIND_BY_NAME";
export const DETAIL ="DETAIL";
export const FILTER_BY_DIET = "FILTER_BY_DIET";

export const getAllRecipes = () => async (dispatch) => {
  const { data } = await axios.get("http://localhost:3001/allRecipes");
  dispatch({
    type: GET_ALL_RECIPES,
    payload: data,
  });
};

export const getAllTypes = () => async (dispatch) => {
  const { data } = await axios.get("http://localhost:3001/type");
  dispatch({
    type: GET_ALL_TYPES,
    payload: data.map((e) => e.name),
  });
};

export const getAllDishTypes = () => async (dispatch) => {
  const { data } = await axios.get("http://localhost:3001/dishTypes");
  dispatch({
    type: GET_ALL_DISH_TYPES,
    payload: data,
  });
};

export const findByName = (name) => async (dispatch) => {
  const { data } = await axios.get(`http://localhost:3001/recipes?name=${name}`);
  console.log(data)
  dispatch({
    type: FIND_BY_NAME,
    payload: data,
  });
};

export const Detail = (id) => async (dispatch) =>{
  const {data} = await axios.get(`http://localhost:3001/recipes/${id}`);
  dispatch({
    type : DETAIL ,
    payload : data
  })
} 

export const filterByDiet = (diet) => async (dispatch) =>{
  const {data} = await axios.get(`http://localhost:3001/filter/${diet}`)
  dispatch({
    type : FILTER_BY_DIET,
    payload : data
  })
}

export const postRecipe =
  (input, checkedState, allDiets, checkedDish, allDishTypes, allSteps) =>
  async () => {
    let array = [];
    for (let key in allSteps) {
      array.push(allSteps[key]);
    }
    let sinUndefined = array.filter((e, i) => e !== "");
    let steps = sinUndefined.map((e, i) => `${i + 2}.${e}`);
    const newRecipe = {
      name: input.name,
      diets: arrayDiets(checkedState, allDiets),
      dishTypes: arrayDiets(checkedDish, allDishTypes).join(" , "),
      healthScore: input.healthScore,
      summary: input.summary,
      image: input.image,
      analyzedInstructions: [`1.${input.analyzedInstructions}`, ...steps].join(
        " ✂ "
      ),
    };
    console.log(newRecipe);
    axios.post("http://localhost:3001/recipe", newRecipe).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };
