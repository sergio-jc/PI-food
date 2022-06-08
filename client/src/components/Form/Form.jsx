import React, { useState } from "react";
import "../Form/Form.css";
import axios from "axios";
import { validate ,arrayDiets} from "./func/funcAux";
import { allDiets } from "./diets";

const From = () => {
  const [input, setInput] = useState({ name: "" });
  const [errors, setErrors] = useState({ name : "You cannot create a recipe without a name"});
  const [checkedState, setCheckedState] = useState(
    new Array(allDiets.length).fill(false)
  );
  const handleInputsChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log(input);
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (errors.name) {
      alert("The recipe was not created correctly");
    } else {
      const newRecipe = {
        name: input.name,
        diets: arrayDiets(checkedState),
      };
      console.log(newRecipe)
      axios.post("http://localhost:3001/recipe",  newRecipe ).then((res) => {
        console.log(res);
        console.log(res.data);
      });
      alert("Your recipe was successfully created");
    }
  };
  // * -----------------------------------------------
  const handleOnChecked = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    console.log(updatedCheckedState);
    setCheckedState(updatedCheckedState);
    console.log(allDiets);
  };
  // * -----------------------------------------------

  return (
    <form onSubmit={(e) => handleOnSubmit(e)}>
      <div>
        <h1> YOUR RECIPE</h1>
        <label>Name : </label>
        <input
          className={errors.name && "danger"}
          type="text"
          name="name"
          onChange={(e) => handleInputsChange(e)}
          value={input.name}
        />
        {errors.name && <p className="danger">{errors.name}</p>}

        <ul className="toppings-list">
          {allDiets.map((e, index) => {
            return (
              <li key={index}>
                <div className="toppings-list-item">
                  <div className="left-section">
                    <input
                      type="checkbox"
                      id={`custom-checkbox-${index}`}
                      name={e}
                      value={e}
                      checked={checkedState[index]}
                      onChange={() => handleOnChecked(index)}
                    />
                    <label htmlFor={`custom-checkbox-${index}`}>{e}</label>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <input type="submit" value="Create" />
    </form>
  );
};

export default From;
