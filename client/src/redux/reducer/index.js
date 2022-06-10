import { GET_ALL_RECIPES, GET_ALL_TYPES, GET_ALL_DISH_TYPES } from "../action";

const initialState = {
  recipes: [],
  recipe: [],
  allDiets: [],
  allDishTypes: [],
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
    default:
      return initialState;
  }
};

export default rootReducer;
