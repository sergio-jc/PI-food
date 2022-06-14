import React, { useState } from "react";
import { useDispatch , useSelector} from "react-redux";
import { filterByDiet } from "../../../redux/action";

const Filter = ({setCurrent}) =>{
    const dispatch = useDispatch()
  const typesDiets = useSelector((state) => state.allDiets);
  const [selectDiet, setSelect] = useState("");
    const handleOnSelect = (e) => {
      setSelect(e.target.value);
    };
    const onSubmitSelect = (e) => {
      console.log(selectDiet);
      setCurrent(1)
      e.preventDefault()
      dispatch(filterByDiet(selectDiet));
    };

  return (
      <div>
          <label >Choose a diet:</label>
          <select
            value={selectDiet}
            onChange={handleOnSelect}
          >
            <option  onClick={onSubmitSelect} value="recipes">Recipes</option>
            {typesDiets.map((e, i) => (
              <option key={`opc.${i}`} value={e} onClick={onSubmitSelect}>
                {e}
              </option>
            ))}
          </select>
        </div>
  )
} 

export default Filter