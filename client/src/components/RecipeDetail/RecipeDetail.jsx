import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearDetail, Detail, clearRecipes } from "../../redux/action";
import Loading from "../Cards/Loading/Loading.jsx";
import "../RecipeDetail/Detail.css";
const RecipeDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(Detail(id));
    return dispatch(clearDetail());
  }, [dispatch, id]);
  const recipe = useSelector((state) => state.recipeDetail);
  const allDiets = recipe.diets
    ? recipe.diets.map((e, i) => {
        if (typeof e === "string") {
          return <div key={`diets_${i}`}>{e}</div>;
        }
        return <div key={`diets_${i}`}>{e.name}</div>;
      })
    : "don't find details";
  return !recipe.image ? (
    <Loading />
  ) : (
    <div className="found_detail">
      <div className="content_detail">
        <div className="img_score_diets">
          <div className="img_detail">
            <Link to={"/home"}>
              <div className="home_detail">🏠︎</div>
              <img className=".img_detail_food" src={recipe.image} alt=" jkly" />
            </Link>
          </div>
          <div className="score_diets">
            <div className="score_detail">
              <h3>{recipe.healthScore}</h3>
            </div>
            <div className="diet_detail">
              <div className="content_diet">{allDiets}</div>
            </div>
          </div>
        </div>

        <div className="summary_steps">
          <div>
            <div className="title_detail">
              <div>{recipe.name}</div>
            </div>

            <div className="summary_contain">
              <p>{recipe.summary}</p>
            </div>
          </div>
          <div className="instruccions_detail">
            {recipe.analyzedInstructions?.split(" ✂ ").map((e, i) => (
              <div key={`step ${i}`} className="instruccions_detail">
                {e}
              </div>
            ))}
          </div>
          <div>
            <div className="dish_contain">
              {" "}
              DISH TYPES : <span> {recipe.dishTypes}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
