import { orderA, orderZ } from "../../components/Button/Order/func/Sort.js";
import {
  GET_ALL_RECIPES,
  GET_ALL_TYPES,
  GET_ALL_DISH_TYPES,
  FIND_BY_NAME,
  DETAIL,
  FILTER_BY_DIET,
  ORDER_BY_ALF
} from "../action";

const initialState = {
  recipes: [],
  allDiets: [],
  allDishTypes: [],
  recipeDetail: {},
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_RECIPES:
      return {
        ...state,
        recipes: action.payload,
      };
    case GET_ALL_TYPES:
      return {
        ...state,
        allDiets: action.payload,
      };
    case GET_ALL_DISH_TYPES:
      return {
        ...state,
        allDishTypes: action.payload,
      };
    case FIND_BY_NAME:
      return {
        ...state,
        recipes: action.payload,
      };
      case FILTER_BY_DIET:
        return {
          ...state,
          recipes: action.payload,
        };
    case DETAIL:
      return {
        ...state,
        recipeDetail: action.payload,
      };
    case ORDER_BY_ALF :
      console.log(action.payload)
      let orderArray;
      let allRecipes = [...state.recipes]
      if(action.payload === false){orderArray = orderA(allRecipes)}
      if(action.payload === true){orderArray = orderZ(allRecipes)}
      console.log(orderArray)
      return {
        ...state ,
        recipes : orderArray
      }
    default:
      return initialState;
  }
};

export default rootReducer;
