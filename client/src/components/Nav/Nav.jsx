import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar.jsx";
import MinMax from "../Button/Order/MinMax.jsx";
import Order from "../Button/Order/Order.jsx";
import Filter from "../Button/Filter/Filter.jsx";
import Icon from '../landingPage/img2.png'
import "../Nav/Nav.css";
const Nav = ({ setCurrent, setLoader }) => {
  return (
    <div className="container">
      <div className="icon" >
        <img  src={Icon} alt="icono"/>
      </div>
      <div className="nav_component">
        <Link to="/" className="text">
          🏠︎
        </Link>
      </div>
      <div className="nav_component">
        <Link to={"/form"} className="text">
          Form
        </Link>
      </div>
      <div className="nav_component">
        <SearchBar setLoader={setLoader} setCurrent={setCurrent} />
      </div>
      <div className="nav_component">
        <Order />
      </div>
      <div className="nav_component">
        <MinMax />
      </div>
      <div className="nav_component">
        <Filter setCurrent={setCurrent} setLoader={setLoader} />
      </div>
    </div>
  );
};

export default Nav;
