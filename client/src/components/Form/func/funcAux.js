import { allDiets } from "../diets";

export const validate = (input) => {
    const errors = {};
    if (!input.name) {
      errors.name = "You cannot create a recipe without a name";
    }
    return errors;
  };
  
export  const arrayDiets = (booleans) => {
    var indices = [];
    var element = true;
    var idx = booleans.indexOf(element);
    while (idx !== -1) {
      indices.push(idx);
      idx = booleans.indexOf(element, idx + 1);
    }
    var porFin = indices.map((e) => allDiets[e]);
    console.log(porFin);
    return porFin;
  };
