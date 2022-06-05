const { Recipe , Type } = require("../db");

const findAllDbRecipe = async () => {
  const recipeFind = await Recipe.findAll();
  return recipeFind;
};

const RecipeByIdDb = async (id)=>{
  const recipeById = await Recipe.findAll({where:{id}})
  return recipeById
}

const createTypes = async (array) =>{
  const arrayTypes = await Type.create(array)
  return arrayTypes
}

const findAllDbTypes = async () => {
  const recipeFind = await Type.findAll();
  return recipeFind;
};

module.exports = {
  findAllDbRecipe,
  RecipeByIdDb,
  createTypes,
  findAllDbTypes
};
