const { YOUR_API_KEY } = process.env;
const { default: axios } = require("axios");

const findAllApiRecipe = async () => {
  const lola = axios
    .get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=100`
    )
    .then((e) => e.data)
    .then((data) => {
      let aryApi = data.results.map((recipe) => ({
        id: recipe.id,
        name: recipe.title,
        summary: recipe.summary.replaceAll(/<(“[^”]”|'[^’]’|[^'”>])*>/g, ""),
        image: recipe.image,
        diets: recipe.diets,
        dishTypes: recipe.dishTypes.join(" , "),
        healthScore: recipe.healthScore,
        analyzedInstructions: recipe.analyzedInstructions[0]?.steps
          .map((ste) => `${ste.number}. ${ste.step}`)
          .join(" ✂ "), // ! importante al usar el emoji ✂
      }));
      return aryApi;
    });
  return lola;
};

const RecipeByIdApi = async (id) => {
  const booleanOfRegExp = id.match(/[a-z]/g);
  if (booleanOfRegExp?.length) {
    return false;
  }
  //*    ? si el de la izquierda es true continua
  //*    &&
  try {
    const { data } = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${YOUR_API_KEY}`
    );
    let aryApi = {
      id: data.id,
      name: data.title,
      summary: data.summary.replaceAll(/<(“[^”]”|'[^’]’|[^'”>])*>/g, ""),
      image: data.image,
      diets: data.diets,
      dishTypes: data.dishTypes.join(" , "), // ! no te olvides dar un objeto parseado de array a string

      healthScore: data.healthScore,
      analyzedInstructions: data.analyzedInstructions[0]?.steps
        .map((ste) => `${ste.number}. ${ste.step}`)
        .join(" ✂ "), //!  no te ilvides usar el # para poder darle espaciados en el front
    };
    return aryApi;
  } catch (e) {
    return `A recipe with the id ${id} does not exist.`;
  }
};

const findAllDishTypes = async () => {
  try {
    const { data } = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=40`
    );
    let aryApi = data.results.flatMap((recipe) => recipe.dishTypes);
    return aryApi;
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  findAllApiRecipe,
  RecipeByIdApi,
  findAllDishTypes,
};
