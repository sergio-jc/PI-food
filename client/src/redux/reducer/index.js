import {
  GET_ALL_RECIPES,
  GET_ALL_TYPES,
  GET_ALL_DISH_TYPES,
  FIND_BY_NAME,
  DETAIL,
} from "../action";

const initialState = {
  recipes: [],
  findRecipe: [],
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
        findRecipe: action.payload,
      };
    case DETAIL:
      return {
        ...state,
        recipeDetail: action.payload,
      };
    default:
      return initialState;
  }
};

export default rootReducer;
