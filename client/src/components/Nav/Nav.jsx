import React from "react";
import { Link } from "react-router-dom";
import SearchBar from '../SearchBar/SearchBar.jsx'
const Nav = () => {
  return (
    <div>
      <nav>
        <Link to="/home" >
          Home
        </Link>
        <Link to={"/form"}>
          Form
        </Link>
        <SearchBar/>
      </nav>
    </div>
  );
};

export default Nav;
