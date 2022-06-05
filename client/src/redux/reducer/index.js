import {GET_ALL_RECIPES} from '../action'

const initialState = {
    recipes : [],
    recipe : []
}
 const rootReducer = (state=initialState , action) =>{
switch(action.type){
    case GET_ALL_RECIPES :
       return   {
            ...state ,
            recipes : action.payload
        }
    default :
    return initialState
}
}

export default rootReducer