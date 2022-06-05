const { Recipe } = require("../db");

const findAllDbRecipe = async () => {
  const recipeFind = await Recipe.findAll();
  return recipeFind;
};

const RecipeByIdDb = async (id)=>{
  const recipeById = await Recipe.findAll({where:{id}})
  return recipeById
}
module.exports = {
  findAllDbRecipe,
  RecipeByIdDb
};
