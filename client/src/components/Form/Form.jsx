import React, { useState, useEffect } from "react";
import "../Form/Form.css";
import { validate } from "./func/funcAux";
import {
  getAllRecipes,
  getAllDishTypes,
  getAllTypes,
  postRecipe,
} from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import CheckBoxDiets from "./inputs/CheckBoxDiets";
import { useHistory } from "react-router-dom";

const From = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(getAllTypes());
      dispatch(getAllDishTypes());
    }, 100);
  }, [dispatch]);

  const [input, setInput] = useState({
    name: "",
    healthScore: "",
    summary: "",
    image: "",
    analyzedInstructions: "",
  });
  const [errors, setErrors] = useState({
    name: "enter a name for your recipe ♡",
    healthScore: "choose a score  at 1 to 100 ♡",
    summary: "make a brief summary ♡",
    image: "choose an image  ♡",
    analyzedInstructions: "how is your recipe made? ♡",
  });
  const [account, setAccount] = useState([]);
  const [steps, setSteps] = useState({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
  });
  const allDiets = useSelector((state) => state.allDiets);
  const allDishTypes = useSelector((state) => state.allDishTypes);
  const safeName = useSelector((state) => state.recipes);
  const history = useHistory();
  const [checkedState, setCheckedState] = useState([
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
  let numberDiets = checkedState.filter(e=>e===true).length;
  let numberDish = checkedDish.filter(e=>e===true).length
 
  const handleInputsChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };
  //-------------------------------------------------------------
  const handleOnSubmit = (e) => {
    dispatch(getAllRecipes());
    e.preventDefault();
    if (
      safeName.filter((e) => e.name.toLowerCase() === input.name.toLowerCase())
        .length
    ) {
      alert(
        "Sorry the name of the recipe already exists try choosing a different name"
      );
    } else {
      if (
        errors.name ||
        errors.healthScore ||
        errors.summary ||
        errors.image ||
        errors.analyzedInstructions ||
        !checkedState.filter((e) => e === true).length ||
        !checkedDish.filter((e) => e === true).length
      ) {
        alert(
          "The recipe was not created correctly ,follow the indications please"
        );
      } else {
        dispatch(
          postRecipe(
            input,
            checkedState,
            allDiets,
            checkedDish,
            allDishTypes,
            steps
          )
        );
        alert("Your recipe was successfully created");
      }
    }
    setInput({
      name: "",
      healthScore: "",
      summary: "",
      image: "",
      analyzedInstructions: "",
    });
    setSteps({
      0: "",
      1: "",
      2: "",
      3: "",
      4: "",
    });
    setAccount([]);
    setCheckedState(new Array(allDiets.length).fill(false));
    setCheckedDish(new Array(allDishTypes.length).fill(false));
    setErrors({
      name: "enter a name for your recipe ♡",
      healthScore: "choose a score  at 1 to 100 ♡",
      summary: "make a brief summary ♡",
      image: "choose an image  ♡",
      analyzedInstructions: "how is your recipe made? ♡",
    })
  };
  // * -----------------------------------------------
  const handleOnChecked = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };
  const handleOnCheckedDish = (position) => {
    const updatedCheckedState = checkedDish.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedDish(updatedCheckedState);
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
  };

  return (
    <div className="form">
      <div className="contain_form">
        <div className="form_inputs">
          <button
            className="back_home"
            onClick={() => {
              history.push("/home");
            }}
          >
            🡸<span>🏠︎</span>
          </button>
          <div>
            <form onSubmit={(e) => handleOnSubmit(e)}>
              <div>
                <div className="title_form_div">
                  <h1 className="title_form">
                    {" "}
                    YOUR <span>RECIPE</span>
                  </h1>
                </div>

                <div className="contain_form_inputs">
                  <div className="input_text">
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
                      {errors.name ? <p className="danger">{errors.name}</p> : <p>Name is correct ✔️</p>}
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
                      {errors.healthScore?(
                        <p className="healthScore">{errors.healthScore}</p>
                      ):<p>Valid healthScore ✔️</p>}
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
                      {errors.summary ? (
                        <p className="danger">{errors.summary}</p>
                      ):<p>Aggregate Summary ✔️</p>}
                    </div>
                    <div>
                      <label>Image :</label>
                      <input
                        className={errors.image && "danger"}
                        placeholder="URL ej: http://..."
                        type="text"
                        name="image"
                        onChange={(e) => handleInputsChange(e)}
                        value={input.image}
                      />
                      {errors.image ? <p className="danger">{errors.image}</p>:<p>Valid URL ✔️</p>}
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
                      {errors.analyzedInstructions ? (
                        <p className="danger">{errors.analyzedInstructions}</p>
                      ):<p>Aggregate Instruction ✔️</p>}
                      <div onClick={onClickNewStep} className={"new_steps"}>
                        New Steps
                      </div>

                      {account.map((e, i) => (
                        <div key={`step_${i}`}>
                          <input
                            // className={errors.analyzedInstructions && "danger"}
                            placeholder={`step ${i + 2}...`}
                            type="text"
                            name={i}
                            onChange={(e) => handleSteps(e)}
                            value={steps[i]}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="input_check">
                    <label className="label_type">Diets :</label>
                    <CheckBoxDiets
                      state={checkedState}
                      handle={handleOnChecked}
                      allDiets={allDiets}
                    />
                    {!checkedState.filter((e) => e === true).length ? (
                      <p className="label_errors">Please choose one diet ♡</p>
                    ):<p className="label_errors"> {numberDiets} types diets selected ✔️</p>}
                    <label className="label_type">Dish Types :</label>
                    <CheckBoxDiets
                      state={checkedDish}
                      handle={handleOnCheckedDish}
                      allDiets={allDishTypes}
                    />
                    {!checkedDish.filter((e) => e === true).length ? 
                      <p className="label_errors">
                        Please choose one  ♡
                      </p>: <p className="label_errors"> {numberDish} types dish selected ✔️</p>}
                  </div>
                </div>
              </div>
              <input type="submit" value="Create" className="button_create" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
//❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤
export default From;

// name: "enter a name for your recipe ❤",
// healthScore: "choose a score for your recipe from 1 to 100 ❤",
// summary: "make a brief summary ❤",
// image: "choose an image  ❤",
// analyzedInstructions: "how is your recipe made? ❤"
