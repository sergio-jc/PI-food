const { findAllApiRecipe, RecipeByIdApi } = require("./recipe.apiController");
const {
  findAllDbRecipe,
  RecipeByIdDb,
  createDiets,
} = require("./recipe.dbController");

const findAllRecipe = async () => {
  try {
    const apiRecipe = await findAllApiRecipe();
    const dbRecipe = await findAllDbRecipe();
    const allRecipe = apiRecipe.concat(dbRecipe);
    return allRecipe;
  } catch (e) {
    console.log(e);
  }
};

const findByIdRecipe = async (id) => {
  try {
    const apiRecipe = await RecipeByIdApi(id);
    const dbRecipe = await RecipeByIdDb(id);
    if (typeof apiRecipe === "string") return apiRecipe;
    if (apiRecipe?.id) return apiRecipe;
    if (dbRecipe.length) return dbRecipe[0];
  } catch (e) {
    console.log(e);
  }
};

const dietsFound = async () => {
  try {
    const recipe = await findAllRecipe();
    const dietsType = recipe.flatMap((types) => types.diets);
    const allDiets = dietsType.filter(
      (diet, i) => dietsType.indexOf(diet) === i
    );
    return allDiets;
  } catch (e) {
    console.log(e);
  }
};

(async () => {
  try {
    const arrayTypes = await dietsFound();
    arrayTypes.forEach(async (diet) => {
      await createDiets({ name: diet });
    });
  } catch (e) {
    console.log(e);
  }
})();

module.exports = {
  findAllRecipe,
  findByIdRecipe,
  dietsFound,
};
