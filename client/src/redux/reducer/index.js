import {GET_ALL_RECIPES} from '../action'

const initialState = {
    recipes : []
}
 const rootReducer = (state=initialState , action) =>{
switch(action.type){
    case GET_ALL_RECIPES :
        return {
            ...state ,
            recipes : state.recipes.push(action.payload)
        }
    default :
    return initialState
}
}

export default rootReducer