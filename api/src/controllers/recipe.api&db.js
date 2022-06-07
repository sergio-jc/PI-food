const {findAllApiRecipe , RecipeByIdApi } = require('./recipe.apiController')
const {findAllDbRecipe , RecipeByIdDb , createDiets} = require('./recipe.dbController')

const findAllRecipe = async () =>{
    const apiRecipe = await findAllApiRecipe ()
    const dbRecipe = await findAllDbRecipe ()
    const allRecipe = apiRecipe.concat(dbRecipe)
    return allRecipe
}

const findByIdRecipe = async (id)=>{
    const apiRecipe = await RecipeByIdApi (id);
    const dbRecipe = await RecipeByIdDb (id);
    if (typeof(apiRecipe) === 'string') return apiRecipe
    if (apiRecipe?.id) return apiRecipe
    if (dbRecipe.length) return dbRecipe
}

const dietsFound = async ()=>{
    const recipe = await findAllRecipe()
    const dietsType = recipe.flatMap(types=>types.diets);
    const allDiets = dietsType.filter((diet,i)=>dietsType.indexOf(diet) === i)
    return allDiets
  }

(async()=>{
    const arrayTypes = await dietsFound();
    arrayTypes.forEach( async (diet) => {
       await createDiets({name:diet})
    });
})()
  
module.exports={
    findAllRecipe,
    findByIdRecipe,
    dietsFound
}