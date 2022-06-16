import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Detail } from "../../redux/action";
import "../RecipeDetail/Detail.css";
const RecipeDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(Detail(id));
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
  return (
    <div className="found_detail">
      <div className="content_detail">
        <div className="img_score_diets">
          <div className="img_detail">
            <img src={recipe.image} alt=" jkly" />
          </div>
          <div className="score_diets">
            <div className="score_detail">
              {/* <label>Health Score</label> */}
              <h3>{recipe.healthScore}</h3>
            </div>
            <div className="diet_detail">
              <div className="content_diet">{allDiets}</div>
            </div>
          </div>
        </div>

        <div className="summary_steps">
        <div className="title_detail">
        {/* //!<Link to={"/home"}>
          <button className="back_home_detail">
            🡸<span>🏠︎</span>
          </button>
        </Link> */}
        <h2>{recipe.name}</h2>
      </div>
          <p>{recipe.summary}</p>
          <div>
            {recipe.analyzedInstructions?.split(" ✂ ").map((e, i) => (
              <p key={`step ${i}`}>{e}</p>
            ))}
          </div>
          <p>{recipe.dishTypes}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
