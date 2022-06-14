import React, { useEffect } from "react";
import Cards from "../Cards/Cards";
import SearchBar from "../SearchBar/SearchBar";
import { useDispatch } from "react-redux";
import { getAllRecipes, getAllTypes } from "../../redux/action";
// import { orderA, orderMax, orderMin, orderZ } from "./func/Sort.js";
import Order from "../Button/Order/Order";
import MinMax from "../Button/Order/MinMax";
import Filter from "../Button/Filter/Filter";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(getAllRecipes());
      dispatch(getAllTypes());
    }, 1000);
  }, [dispatch]);

  return (
    <div>
      <SearchBar />
      <Order />
      <MinMax />
      <Filter />
      <Cards />
    </div>
  );
};
export default Home;
