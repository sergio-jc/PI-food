import React from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { Link } from "react-router-dom";

const Nav = ( ) => {
  return (
    <div>
      <nav>
        <Link to="/home">
            <img
              id="logoHenry"
              src="http://www.neserideas.com/wp-content/uploads/2017/04/diseo-logotipo-blog-de-cocina.png"
              width="30"
              height="30"
              className="logo"
              alt="logo"
            />
            RECETAS HAPPY
        </Link>
        <Link to={'/form'}>Form</Link>
      </nav>
    </div>
  );
};

export default Nav;
