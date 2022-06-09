import React, { useState, useEffect } from "react";
import "../Form/Form.css";
import { validate } from "./func/funcAux";
import { getAllTypes, postRecipe } from "../../redux/action";
import { useDispatch , useSelector} from "react-redux";
import CheckBoxDiets from "./inputs/CheckBoxDiets";
const From = () => {
  const [input, setInput] = useState({ name: "" ,healthScore:0});
  const [errors, setErrors] = useState({ name: "",healthScore:0 });
  const dispatch = useDispatch();
  const allDiets = useSelector((state) => state.allDiets)
  const [checkedState, setCheckedState] = useState(
    [ false, false, false, false, false, false, false ]
  );

  useEffect(()=>{
    dispatch(getAllTypes())
  },[dispatch])

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
      dispatch(postRecipe(input, checkedState,allDiets));
      alert("Your recipe was successfully created");
    }
    setInput({ name: "" });
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
        
        {/* <input
          className={errors.healthScore && "danger"}
          type="number"
          name="healthScore"
          onChange={(e) => handleInputsChange(e)}
          value={input.healthScore}
        />
        {errors.healthScore && <p className="danger">{errors.healthScore}</p>}
         */}
        <CheckBoxDiets state={checkedState} handle={handleOnChecked} allDiets={allDiets}/>
        
      </div>
      <input type="submit" value="Create" />
    </form>
  );
};

export default From;
