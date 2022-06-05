const {findAllApiRecipe , RecipeByIdApi } = require('./recipe.apiController')
const {findAllDbRecipe , RecipeByIdDb } = require('./recipe.dbController')

const findAllRecipe = async () =>{
    const apiRecipe = await findAllApiRecipe ()
    const dbRecipe = await findAllDbRecipe ()
    const allRecipe = apiRecipe.concat(dbRecipe)
    return allRecipe
}

const findByIdRecipe = async (id)=>{
    const apiRecipe = await RecipeByIdApi (id);
    const dbRecipe = await RecipeByIdDb (id);
    console.log (apiRecipe)
    console.log (dbRecipe)
    if (apiRecipe?.id) return apiRecipe
    if (dbRecipe.length) return dbRecipe
}


module.exports={
    findAllRecipe,
    findByIdRecipe
}