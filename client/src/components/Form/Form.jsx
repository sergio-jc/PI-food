import React, { useState } from "react";
import "../Form/Form.css";

const validate = (input) => {
  const errors = {};
  if (!input.name) {
    errors.name = "You cannot create a recipe without a name";
  }
  return errors;
};

const From = () => {
  const [input, setInput] = useState({name:''}); // !  si no te funciona inicialo
  const [errors, setErrors] = useState({name:''});

  const handleInputsChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log(input)
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
      alert("Your recipe was successfully created");
    }
  };

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
        {/* </div>
      <div>
        <label>HealthScore :</label>
        <input />
      </div>
      <div>
        <label>Dish Types :</label>
        <input />
      </div>
      <div>
        <label>Summary :</label>
        <input />
      </div>
      <div>
        <label>Steps :</label>
        <input /> */}
      </div>
      <input type="submit" value="Create" />
    </form>
  );
};

export default From;
