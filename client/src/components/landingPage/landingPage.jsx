import React from "react";
import "../landingPage/landingPage.css";
import { Link } from "react-router-dom";
import Logo from '../landingPage/img1.png'
const LanndingPage = () => {
  return (
    <div className="backgorund_image">
      <section>
        <header>
          <img
            src="https://freedesignfile.com/upload/2016/05/Healthy-eating-logo-design-vector-set-09.jpg"
            className="logo"
          />
        </header>
        <div className="content_landing">
          <div className="textBox" />
          <h2>
            It's not just Recipes <br></br>It's <span>Healthy Eating</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, quis
            vitae pariatur quos expedita quam odio facere repellendus.
            Reprehenderit ea excepturi deserunt, nostrum atque recusandae.
            Assumenda voluptatibus accusantium atque illum!
          </p>
          <Link to={'/home'}>
            <button>Home</button>
          </Link>
        </div>
        <div className="imgBox">
            <img src={Logo} className="starBucks"/>
        </div>
      </section>
    </div>
  );
};

export default LanndingPage;

//https://dcassetcdn.com/design_img/27450/33893/33893_592098_27450_image.jpg
