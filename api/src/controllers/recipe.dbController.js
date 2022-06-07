const { Recipe , diets } = require("../db");

const findAllDbRecipe = async () => {
  const recipeFind = await Recipe.findAll({include:{
    model : diets ,
    attributes : ['name'],
    through:{                   //?investigar
      attributes:[]
    }
  }});
  return recipeFind;
};

const RecipeByIdDb = async (id)=>{
  const recipeById = await Recipe.findAll({where:{id},include:{
    model : diets ,
    attributes : ['name'],
    through:{                   //?investigar
      attributes:[]
    }
  }})
  console.log(recipeById)
  return   recipeById
}

const createDiets = async (array) =>{
  const arrayDiets = await diets.create(array)
  return arrayDiets
}

const findAllDbDiets = async () => {
  const recipeFind = await diets.findAll();
  return recipeFind;
};

// const objArray =(ary) =>{
//   let array = ary.dataValues
//   for(let i = 0 ; i <array.length ; i ++){
//  let lolo = array.map(e=>e.diets.map(e=>e.name))[i]
//  array[i].diets= lolo
//  }
// }                

module.exports = {
  findAllDbRecipe,
  RecipeByIdDb,
  createDiets,
  findAllDbDiets
};
