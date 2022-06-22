import axios from "axios";
import { orderA, orderMax } from "../../components/Button/Order/func/Sort.js";
import { arrayDiets } from "../../components/Form/func/funcAux.js";
export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const GET_ALL_TYPES = "GET_ALL_TYPES";
export const GET_ALL_DISH_TYPES = "GET_ALL_DISH_TYPES";
export const FIND_BY_NAME = "FIND_BY_NAME";
export const DETAIL ="DETAIL";
export const FILTER_BY_DIET = "FILTER_BY_DIET";
export const ORDER_BY_ALF = "ORDER_BY_ALF";
export const ORDER_BY_MIN_MAX = "ORDER_BY_MIN_MAX";
export const CLEAR_DETAIL = "CLEAR_DETAIL";
export const CLEAR_RECIPES = "CLEAR_RECIPES"

const ObjectByArray = (array) =>{
  const allRecipes = array.filter( e => e.diets?.length );
  allRecipes.forEach( e => typeof e.diets[0] !== 'string' ? e.diets = e.diets.map( e => e.name) : 'noooo');
  return allRecipes
}

export const getAllRecipes = () => async (dispatch) => {
  const { data } = await axios.get("http://localhost:3001/allRecipes");
  dispatch({
    type: GET_ALL_RECIPES,
    payload: orderMax(orderA(ObjectByArray(data)))
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
  dispatch({
    type: FIND_BY_NAME,
    payload: typeof(data)=== 'string'? data:ObjectByArray(data)
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
  const {data} = await axios.get(`http://localhost:3001/filter/${diet}`);
  dispatch({
    type : FILTER_BY_DIET,
    payload : ObjectByArray(data)
  })
}

export const orderByAlf = (boolean) =>{
  return ({
    type : ORDER_BY_ALF,
    payload : boolean
  })
}

export const orderByMinMax = (boolean) =>{
  return ({
    type : ORDER_BY_MIN_MAX,
    payload : boolean
  })
}

export const clearDetail = ( ) =>{
  return ({
    type : CLEAR_DETAIL,
    payload : {}
  })
}

export const clearRecipes = ( ) =>{   //!recordar borrarr y mirara odnde lo usas
  return ({
    type : CLEAR_RECIPES,
    payload : []
  })
}


export const postRecipe =
  (input, checkedState, allDiets, checkedDish, allDishTypes, allSteps) =>{
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
    }
  return async () => {
   await axios.post("http://localhost:3001/recipe", newRecipe)
  };
}