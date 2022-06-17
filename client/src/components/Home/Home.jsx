import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes, getAllTypes , getAllDishTypes} from "../../redux/action";
// import { orderA, orderMax, orderMin, orderZ } from "./func/Sort.js";
import Pagination from "../Pagination/Pagination";
import Nav from "../Nav/Nav";
import Loading from "../Cards/Loading/Loading";

const Home = () => {
  const allRecipe = useSelector((state)=>state.recipes)
  const [loader ,setLoader] = useState(false)
  const [current , setCurrent] =useState(1)
  const [totalCards] =useState(9)// ? current * total = 9
  const size = allRecipe.length 
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
  }, [dispatch]);
  
  return (
    <div>
      <Nav setCurrent={setCurrent} setLoader={setLoader}/>
      <Cards actualPage={actualPage} loader={loader}/>
      <Pagination setCurrent={setCurrent} size={size} totalCards={totalCards} current={current}/>
    </div>
  );
};
export default Home;
