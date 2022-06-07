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
      ({ id, name, image, healthScore, diets}) => {
        return (
          <>
            <div key={id}>
              <h3>{name}</h3>
              <h3>{healthScore}</h3>
              {diets.length &&
              
               typeof(diets[0]) === 'string' ? (
                <ul >
                  DIETS:
                  {diets.map((e) => (
                    <h4 >{e}</h4>
                  ))}
                </ul>
               ) :  
              (
                <ul>
                 <h3>DIETS:</h3> 
                  {diets.map((e) => (
                    <h4>{e.name}</h4>
                  ))}
                </ul>
              )
               }
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
