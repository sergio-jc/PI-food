import React, { useState, useEffect } from "react";
import "../Form/Form.css";
import { validate } from "./func/funcAux";
import { getAllTypes, postRecipe } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import CheckBoxDiets from "./inputs/CheckBoxDiets";
import Input from "./inputs/input";
const From = () => {
  const [input, setInput] = useState({
    name: "",
    healthScore: "",
    summary: "",
    image: "",
    analyzedInstructions: "",
  });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const allDiets = useSelector((state) => state.allDiets);
  const [checkedState, setCheckedState] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    dispatch(getAllTypes());
  }, [dispatch]);

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
    if (errors.name || errors.healthScore) {
      alert("The recipe was not created correctly");
    } else {
      dispatch(postRecipe(input, checkedState, allDiets));
      alert("Your recipe was successfully created");
    }
    setInput({
      name: "",
      healthScore: "",
      summary: "",
      image: "",
      analyzedInstructions: "",
    });
    setCheckedState(new Array(allDiets.length).fill(false));
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

        <Input
          className={errors.healthScore && "danger"}
          name={"healthScore"}
          handle={handleInputsChange}
          input={input}
          type={"number"}
        />
        {errors.healthScore && (
          <p className="healthScore">{errors.healthScore}</p>
        )}

        <Input
        className={errors.summary && "danger"}
          name={"summary"}
          handle={handleInputsChange}
          input={input}
          type={"text"}
        />
        {errors.summary && <p className="danger">{errors.summary}</p>}
        <Input
        className={errors.image && "danger"}
          name={"image"}
          handle={handleInputsChange}
          input={input}
          type={"url"}
        />
        {errors.image && <p className="danger">{errors.image}</p>}
        <Input
        className={errors.analyzedInstructions && "danger"}
          name={"analyzedInstructions"}
          handle={handleInputsChange}
          input={input}
          type={"text"}
        />
        {errors.analyzedInstructions && (
          <p className="danger">{errors.analyzedInstructions}</p>
        )}
        <CheckBoxDiets
          state={checkedState}
          handle={handleOnChecked}
          allDiets={allDiets}
        />
      </div>
      <input type="submit" value="Create" />
    </form>
  );
};

export default From;
