import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes } from "../../redux/action";

const Cards = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRecipes());
  }, [dispatch]);

  const allRecipes = useSelector((state) => state.recipes);

  let display;
  if (allRecipes) {
    display = allRecipes.map(
      ({ id, name, image, healthScore, diets, dishTypes }) => {
        return (
          <>
            <div key={id}>
              <h3>{name}</h3>
              <h3>{healthScore}</h3>
              {diets.length && (
                <ul>
                  DIETS:
                  {diets.map((e) => (
                    <li>{e}</li>
                  ))}
                </ul>
              )}
              {dishTypes.length && (
                <ul>
                  DISH TYPES :
                  {dishTypes.map((e) => (
                    <li>{e}</li>
                  ))}
                </ul>
              )}
              <img src={image} alt="s" />
            </div>
          </>
        );
      }
    );
  } else {
    display = "Recipes not found";
  }
  return <div>{display}</div>;
};

export default Cards;
