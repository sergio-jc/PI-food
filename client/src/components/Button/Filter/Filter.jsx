import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByDiet } from "../../../redux/action";
import "../Filter/Filter.css";

const Filter = ({ setCurrent, setLoader }) => {
  const dispatch = useDispatch();
  const typesDiets = useSelector((state) => state.allDiets);
  const onSubmitSelect = (e) => {
    setCurrent(1);
    e.preventDefault();
    dispatch(filterByDiet(e.target.value));
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  };

  return (
    <div>
      <label className="choose"> Choose a diet : </label>
      <select onChange={onSubmitSelect} className={"select_diet"}>
        <option value="recipes" className={"select_diet"}>
          {"..."}
        </option>
        <option value="recipes" className={"select_diet"}>
          All Recipes
        </option>
        {typesDiets.map((e, i) => (
          <option key={`opc.${i}`} value={e} className={"select_diet"}>
            {e}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
