import React from "react";
const CheckBoxDiets = ({ state, handle, allDiets }) => {
  return !allDiets.length ? <h1>LOADING</h1>:(
    <div>
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
                    checked={state[index]}
                    onChange={() => handle(index)}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{e}</label>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default CheckBoxDiets;
