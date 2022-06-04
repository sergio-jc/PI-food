const {findAllApiRecipe} = require('./recipe.apiController')
const {findAllDbRecipe} = require('./recipe.dbController')

const findAllRecipe = async () =>{
    const apiRecipe = await findAllApiRecipe ()
    const dbRecipe = await findAllDbRecipe ()
    console.log(apiRecipe)
    console.log(dbRecipe)
    const allRecipe = apiRecipe.concat(dbRecipe)
    console.log( allRecipe )
    return allRecipe
}

module.exports={
    findAllRecipe
}