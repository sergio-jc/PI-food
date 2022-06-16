import React, { useState } from "react";
import { useDispatch , useSelector} from "react-redux";
import { filterByDiet } from "../../../redux/action";
import '../Filter/Filter.css'

const Filter = ({setCurrent , setLoader}) =>{
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
      setLoader(true)
    setTimeout(()=>{
      setLoader(false)
    },3000)
    };

  return (
      <div>
          <label className="choose" > Choose a diet : </label>
          <select
            value={selectDiet}
            onChange={handleOnSelect}
            className={'select_diet'}
          >
            <option  onClick={onSubmitSelect} value="recipes" className={'select_diet'}>Recipes</option>
            {typesDiets.map((e, i) => (
              <option key={`opc.${i}`} value={e} onClick={onSubmitSelect} 
              className={'select_diet'}>
                {e}
              </option>
            ))}
          </select>
        </div>
  )
} 

export default Filter