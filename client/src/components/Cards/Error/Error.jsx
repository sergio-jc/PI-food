import React from "react";
import "../Error/Error.css";
import { useDispatch } from "react-redux";
import { getAllRecipes } from "../../../redux/action";
const Error = () => {
  const dispatch = useDispatch();
  return (
    <div className="contain_error">
      <div className="color_error">
        <div className="color_error_w">
          <div className="msg_error">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-SMyMCQB7BRh3O-iR20yG_AlpjtNA7bSsSj3WNiOEupwkXVioVPGhH6Caar3ZAUGCgis&usqp=CAU"
              className="img_4"
            />
            <img src="https://img.icons8.com/ios/500/meal.png" />
            <img
              src="https://img.icons8.com/wired/512/meal.png"
              className="img_0"
            />
          </div>
          <div>
            Sorry the recipe was not found, try looking for another among our
            more than 500 recipes ...
          </div>
          <div className="button_error">
            <img
              src="https://static.vecteezy.com/system/resources/previews/003/067/861/original/cartoon-happy-smile-face-emoticon-icon-in-flat-style-free-vector.jpg"
              alt="feliz"
              className="carita_feliz"
            />
            <div onClick={(e) => dispatch(getAllRecipes())}>
              BACK HOME
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <div>
        <h1>Error</h1>
        <button onClick={(e) => dispatch(getAllRecipes())}>
          ver todas las cartas
        </button>
      </div> */
}

export default Error;

//https://cdn-icons-png.flaticon.com/512/3349/3349543.png
//https://img.icons8.com/wired/512/meal.png
//https://cdn-icons-png.flaticon.com/512/33/33059.png
//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrPYQ8vWTlw-UrEVdHsSjFyQI63-7zENIqhui7zn53OY9peVxy3dGW0HuSFQUkowtLCls&usqp=CAU
//
//  data:image/png;base64,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
