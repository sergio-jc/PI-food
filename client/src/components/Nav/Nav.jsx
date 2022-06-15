import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar.jsx";
import MinMax from "../Button/Order/MinMax.jsx";
import Order from "../Button/Order/Order.jsx";
import Filter from "../Button/Filter/Filter.jsx";
import "../Nav/Nav.css"
const Nav = ({ setCurrent }) => {
  return (
    <div className="container">
      <div className="nav_component">
          <Link to="/" className='text'>🏠︎</Link>
        </div>
        <div className="nav_component">
          <Link to="/home" className='text'>Home</Link>
        </div>
        <div className="nav_component">
          <Link to={"/form"} className='text'>Form</Link>
        </div>
        <div className="nav_component">
          <SearchBar />
        </div>
        <div className="nav_component"> 
          <Order />
        </div>
        <div className="nav_component">
          <MinMax />
        </div>
        <div className="nav_component">
          <Filter setCurrent={setCurrent} />
        </div>
     
    </div>
  );
};

export default Nav;
