import React from "react";
import "../Pagination/Pagination.css";

const Pagination = ({ setCurrent, size, totalCards, current }) => {
  if(!size){
    return <div></div>
  }
  console.log(setCurrent, size, totalCards, current )
  const display = Math.ceil(size / totalCards);
  
  let total = [];
  console.log(total, "inicial");
  for (let i = 1; i <= display; i++) {
    total.push(i);
  }
  const handleOnClick = (e) => {
    setCurrent(parseInt(e.target.value));
    console.log(current)
  };
  const handlePre = (e) => {
    if (current > 1) {
      setCurrent(current - 1);
    }
  };
  const handleNext = (e) => {
    if (current < total.length) {
      setCurrent(current + 1);
    }

  };
  return (
    <div className="container_button">
      <button className="button" onClick={handlePre}>
        {"<"}
      </button>
      {total.map((e, i) => (
        <button
          className={current === e? 'button active_button':'button'}
          value={e}
          onClick={handleOnClick}
          key={`button ${i}`}
        >
          {e}
        </button>
      ))}
      <button className="button" onClick={handleNext}>
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
