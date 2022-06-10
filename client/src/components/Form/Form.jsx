import React, { useState, useEffect } from "react";
import "../Form/Form.css";
import { validate } from "./func/funcAux";
import { getAllDishTypes, getAllTypes, postRecipe } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import CheckBoxDiets from "./inputs/CheckBoxDiets";

const From = () => {
  const [input, setInput] = useState({
    name: "",
    healthScore: "",
    summary: "",
    image: "",
    analyzedInstructions: "",
  });
  const [errors, setErrors] = useState({
    name: "enter a name for your recipe ❤",
    healthScore: "choose a score for your recipe from 1 to 100 ❤",
    summary: "make a brief summary ❤",
    image: "choose an image  ❤",
    analyzedInstructions: "how is your recipe made? ❤",
  });
  const [account, setAccount] = useState([]);
  const [steps, setSteps] = useState({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
  });
  console.log(steps)
  const dispatch = useDispatch();
  const allDiets = useSelector((state) => state.allDiets);
  const allDishTypes = useSelector((state) => state.allDishTypes);
  const [checkedState, setCheckedState] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [checkedDish, setCheckedDish] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  // new Array(allDishTypes.length).fill(false)

  useEffect(() => {
    dispatch(getAllDishTypes());
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
    if (
      errors.name ||
      errors.healthScore ||
      errors.summary ||
      errors.image ||
      errors.analyzedInstructions ||
      !checkedState.filter((e) => e === true).length ||
      !checkedDish.filter((e)=> e === true).length
    ) {
      alert(
        "The recipe was not created correctly ,follow the indications please"
      );
    } else {
      dispatch(
        postRecipe(input, checkedState, allDiets, checkedDish, allDishTypes,steps)
      );
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
  const handleOnCheckedDish = (position) => {
    const updatedCheckedState = checkedDish.map((item, index) =>
      index === position ? !item : item
    );
    console.log(updatedCheckedState);
    setCheckedDish(updatedCheckedState);
    console.log(allDishTypes);
  };
  // * -----------------------------------------------

  let acc = 0;
  const onClickNewStep = (e) => {
    if (account.length < 5) {
      acc++;
      let input = [...account];
      input.push(acc);
      setAccount(input);
    }
  };

  const handleSteps = (e) => {
    setSteps({
      ...steps,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <form onSubmit={(e) => handleOnSubmit(e)}>
      <div>
        <h1> YOUR RECIPE</h1>
        <div>
          <label>Name : </label>
          <input
            className={errors.name && "danger"}
            placeholder="Ej: Strawberries with cream"
            type="text"
            name="name"
            onChange={(e) => handleInputsChange(e)}
            value={input.name}
          />
          {errors.name && <p className="danger">{errors.name}</p>}
        </div>
        <div>
          <label>Health Score : </label>
          <input
            className={errors.healthScore && "danger"}
            placeholder=" 0 - 100"
            type="text"
            name="healthScore"
            onChange={(e) => handleInputsChange(e)}
            value={input.healthScore}
          />
          {errors.healthScore && (
            <p className="healthScore">{errors.healthScore}</p>
          )}
        </div>
        <div>
          <label>Summary : </label>
          <input
            className={errors.summary && "danger"}
            placeholder="Ej: fresh sweet and sour "
            type="text"
            name="summary"
            onChange={(e) => handleInputsChange(e)}
            value={input.summary}
          />
          {errors.summary && <p className="danger">{errors.summary}</p>}
        </div>
        <div>
          <label>Image :</label>
          <input
            className={errors.image && "danger"}
            placeholder="URL ej: http://..."
            type="url"
            name="image"
            onChange={(e) => handleInputsChange(e)}
            value={input.image}
          />
          {errors.image && <p className="danger">{errors.image}</p>}
        </div>
        <div>
          <label>Instructions :</label>
          <input
            className={errors.analyzedInstructions && "danger"}
            placeholder="Ej: 1.Washes strawberries"
            type="text"
            name="analyzedInstructions"
            onChange={(e) => handleInputsChange(e)}
            value={input.analyzedInstructions}
          />
          {errors.analyzedInstructions && (
            <p className="danger">{errors.analyzedInstructions}</p>
          )}
          <div onClick={onClickNewStep}>New Steps</div>


          {account.map((e ,i) => (
            <div key={`step_${i}`}>
              <input
                // className={errors.analyzedInstructions && "danger"}
                placeholder={`step ${i+2}...`}
                type="text"
                name={i}
                onChange={(e) => handleSteps(e)}
                value={steps[i]}
              />
            </div>
          ))}

        </div>
        <label>Diets :</label>
        <CheckBoxDiets
          state={checkedState}
          handle={handleOnChecked}
          allDiets={allDiets}
        />
        {!checkedState.filter((e) => e === true).length && (
          <p>Please choose at least one diet ❤</p>
        )}
        <label>Dish Types :</label>
        <CheckBoxDiets
          state={checkedDish}
          handle={handleOnCheckedDish}
          allDiets={allDishTypes}
        />
        {!checkedDish.filter((e)=> e === true).length && (
          <p>Please choose at least one Dish Type ❤</p>
        )}
      </div>
      <input type="submit" value="Create" />
    </form>
  );
};

export default From;

// name: "enter a name for your recipe ❤",
// healthScore: "choose a score for your recipe from 1 to 100 ❤",
// summary: "make a brief summary ❤",
// image: "choose an image  ❤",
// analyzedInstructions: "how is your recipe made? ❤"
