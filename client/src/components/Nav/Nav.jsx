import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav>
        <Link to="/home">
          <img
            id="logoHenry"
            src="http://www.neserideas.com/wp-content/uploads/2017/04/diseo-logotipo-blog-de-cocina.png"
            width="30"
            height="30"
            className="logotipo"
            alt="logo"
          />
          <span className="logotipo">RECETAS HAPPY</span>
        </Link>
        <Link to="/home" className="enlaces">
          Home
        </Link>
        <Link to={"/form"} className="enlaces">
          Form
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
