const { Recipe } = require("../db");

const findAllDbRecipe = async () => {
  const recipeFind = await Recipe.findAll();
  return recipeFind;
};

module.exports = {
  findAllDbRecipe,
};
