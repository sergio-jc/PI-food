import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes, getAllTypes , getAllDishTypes, clearRecipes} from "../../redux/action";
import Pagination from "../Pagination/Pagination";
import Nav from "../Nav/Nav";


const Home = () => {
  const allRecipe = useSelector((state)=>state.recipes)
  const [loader ,setLoader] = useState(false)
  const [current , setCurrent] =useState(1)
  const [totalCards] =useState(9)
  const size = typeof(allRecipe) === 'string' ? 0 : allRecipe.length 
  const lastPage =current*totalCards
  const initialPage = lastPage-totalCards
  const actualPage = allRecipe.slice(initialPage,lastPage)
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(getAllRecipes());
      dispatch(getAllTypes());
      dispatch(getAllDishTypes());
    }, 1000);
    return dispatch(clearRecipes())
  }, [dispatch]);
  
  return (
    <div className="Home">
      <Nav setCurrent={setCurrent} setLoader={setLoader}/>
      <Cards actualPage={actualPage} loader={loader}/>
      <Pagination setCurrent={setCurrent} size={size} totalCards={totalCards} current={current}/>
    </div>
  );
};
export default Home;
