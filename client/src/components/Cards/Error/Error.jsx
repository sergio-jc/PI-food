import React from "react";
import "../Error/Error.css";
import { useDispatch } from "react-redux";
import { clearRecipes, getAllRecipes } from "../../../redux/action";
const Error = () => {
  const dispatch = useDispatch();
  return (
    <div className="contain_error">
      <div className="color_error">
        <div className="color_error_w">
          <div className="msg_error">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-SMyMCQB7BRh3O-iR20yG_AlpjtNA7bSsSj3WNiOEupwkXVioVPGhH6Caar3ZAUGCgis&usqp=CAU"
              alt="number_4"
              className="img_4"
            />
            <img src="https://img.icons8.com/ios/500/meal.png" alt="patillo_0" />
            <img
              src="https://img.icons8.com/ios/500/meal.png"
             alt="patillo_01"
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
              alt="carita_:D"
              className="carita_feliz"
            />
            <div onClick={(e) => {
                dispatch(clearRecipes())
                dispatch(getAllRecipes())}}>
              BACK HOME
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Error;

