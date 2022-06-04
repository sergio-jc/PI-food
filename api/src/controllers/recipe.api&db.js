const {findAllApiRecipe} = require('./recipe.apiController')
const {findAllDbRecipe} = require('./recipe.dbController')

const findAllRecipe = async () =>{
    const apiRecipe = await findAllApiRecipe ()
    const dbRecipe = await findAllDbRecipe ()
    console.log(apiRecipe)
    console.log(dbRecipe)
    const allRecipe = apiRecipe.concat(dbRecipe)
    return allRecipe
}

module.exports={
    findAllRecipe
}