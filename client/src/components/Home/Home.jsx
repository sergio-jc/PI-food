import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import SearchBar from "../SearchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes, getAllTypes } from "../../redux/action";
// import { orderA, orderMax, orderMin, orderZ } from "./func/Sort.js";
import Order from "../Button/Order/Order";
import MinMax from "../Button/Order/MinMax";
import Filter from "../Button/Filter/Filter";
import Pagination from "../Pagination/Pagination";
const Home = () => {
  const allRecipe = useSelector((state)=>state.recipes)
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
    }, 1000);
  }, [dispatch]);

  return (
    <div>
      <Order />
      <MinMax />
      <Filter  setCurrent={setCurrent} />
      <Cards actualPage={actualPage}/>
      <Pagination setCurrent={setCurrent} size={size} totalCards={totalCards} current={current}/>
    </div>
  );
};
export default Home;
