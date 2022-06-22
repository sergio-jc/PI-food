const { Recipe , diets } = require("../db");

const findAllDbRecipe =() => {
    const recipeFind =  Recipe.findAll({include:{
      model : diets ,
      attributes : ['name'],
      through:{                  
        attributes:[]
      }
    }})
    .then(e=>{
      return e
    })
    .catch(e=>{
      console.log(e)
    })
    return recipeFind;
};

const RecipeByIdDb =  (id)=>{

    const recipeById = Recipe.findAll({where:{id},include:{
      model : diets ,
      attributes : ['name'],
      through:{                  
        attributes:[]
      }
    }})
    .then(e=> e)
    .catch(e=>console.log(e))

    return   recipeById

}

const createDiets = (array) =>{
  
    const arrayDiets = diets.create(array)
    .then(e=>e)
    .catch(e=>console.log(e))
    return arrayDiets

}

const findAllDbDiets = () => {
 let lola = diets.findAll()
  .then(e=>{
    return e;
  })
  .catch(e=>{
    console.log(e)
  })
  console.log(lola)
  return lola
};


module.exports = {
  findAllDbRecipe,
  RecipeByIdDb,
  createDiets,
  findAllDbDiets
};
