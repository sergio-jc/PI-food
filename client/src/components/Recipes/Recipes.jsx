import React, {useEffect} from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { getAllRecipes } from '../../redux/action';
import RecipeCard from '../RecipeCard/RecipeCard';

const Recipes = () => {
    const dispatch = useDispatch();
    const recipes = useSelector(state => state.recipes)
    useEffect(()=>{
        dispatch(getAllRecipes())
    },[dispatch])
  return (
    <div>Recipes</div>
  )
}
export default Recipes
