import React from "react";
import { allDiets } from "../diets";
const CheckBoxDiets = ( State, handle) => {
  return (
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
                      checked={State[index]}
                      onChange={() => handle(index)}
                    />
                    <label htmlFor={`custom-checkbox-${index}`}>{e}</label>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
  );
};
export default CheckBoxDiets