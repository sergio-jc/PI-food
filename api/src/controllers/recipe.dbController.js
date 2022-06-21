const { Recipe , diets } = require("../db");

const findAllDbRecipe = async () => {
  try {
    const recipeFind = await Recipe.findAll({include:{
      model : diets ,
      attributes : ['name'],
      through:{                   //?investigar
        attributes:[]
      }
    }});
    return recipeFind;
  }catch (e) {
    console.log(e)
  }
};

const RecipeByIdDb = async (id)=>{
  try {
    const recipeById = await Recipe.findAll({where:{id},include:{
      model : diets ,
      attributes : ['name'],
      through:{                  
        attributes:[]
      }
    }})
    return   recipeById
  } catch(e) {
    console.log(e)
  }
}

const createDiets = async (array) =>{
  try {
    const arrayDiets = await diets.create(array)
    return arrayDiets
  } catch(e) {
    console.log(e)
  }
}

const findAllDbDiets = async () => {
  try {
    const recipeFind = await diets.findAll();
    return recipeFind;
  }catch(e){
    console.log(e)
  }
};


module.exports = {
  findAllDbRecipe,
  RecipeByIdDb,
  createDiets,
  findAllDbDiets
};
