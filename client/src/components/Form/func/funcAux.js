// * valida si hay errores o no
export const validate = (input) => {
  const errors = {};
  let regExp = /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)($|\?.*$)/;
  let url = input.image.match(regExp);

  if (!input.image) {
    errors.image = "copy an image URL ";
  } else if (!url?.length) {
    errors.image = "copy a valid URL! ";
  }

  if (!input.name) {
    errors.name = "You cannot create a recipe without a name !";
  } 

  if (!input.healthScore) {
    errors.healthScore = "you should choose a number from 1 to 100";
  } else if (!(input.healthScore >= 0 && input.healthScore <= 100)) {
    errors.healthScore =
      "* no letters or other symbols, numbers between 0-100";
  }

  if (!input.summary) {
    errors.summary = "encourage yourself to write a summary ";
  }

  if (!input.analyzedInstructions) {
    errors.analyzedInstructions =
      "create steps so that others can make your recipe ";
  }

  return errors;
};

// * parsea en cambio del estado de las checkbox a un array
export const arrayDiets = (booleans, allDiets) => {
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

// {
//   name: "",
//   healthScore: "",
//   summary: "",
//   image: "",
//   analyzedInstructions: "",
// }

// name: "enter a name for your recipe ❤",
// healthScore: "choose a score for your recipe from 1 to 100 ❤",
// summary: "make a brief summary ❤",
// image: "choose an image  ❤",
// analyzedInstructions: "how is your recipe made? ❤"
