import React from "react";
import "../landingPage/landingPage.css";
import { Link } from "react-router-dom";
import Logo from '../landingPage/img1.png'
import Logo2 from '../landingPage/img2.png'

// TODO : Recuerda porfavor deployarlo y poner un link para tu linkedind

const LanndingPage = () => {
  return (
    <div className="backgorund_image">
      <section>
      <div className="circle"/>
        <header>
          <img
            src={Logo2}
            alt='logo_img'
            className="logo"
          />
        </header>
        <div className="content_landing">
          <div className="textBox" >
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
            <div className="home_button">See The Recipes</div>
          </Link>
          </div>
        </div>
        <div className="imgBox">
            <img src={Logo} className="starBucks"
            alt="dish_healty"/>
           
        </div>
      </section>
    </div>
  );
};

export default LanndingPage;

// TODO : Recuerda porfavor deployarlo y poner un link para tu linkedind
//https://dcassetcdn.com/design_img/27450/33893/33893_592098_27450_image.jpg
