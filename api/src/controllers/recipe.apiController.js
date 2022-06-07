const { YOUR_API_KEY } = process.env;
const { default: axios } = require("axios");

const findAllApiRecipe = async ()=>{
    const { data } = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=10` // ! no te olvides de 100
      );
      let aryApi = data.results.map((recipe) => ({
        id: recipe.id,
        name: recipe.title,
        summary: recipe.summary,
        image: recipe.image,
        diets: recipe.diets,
        dishTypes : recipe.dishTypes,
        healthScore:recipe.healthScore,
        analyzedInstructions: recipe.analyzedInstructions[0]?.steps.map(ste=>`${ste.number}. ${ste.step}`)
      }));
      return aryApi
}

const RecipeByIdApi = async (id)=>{
  const booleanOfRegExp = id.match(/[a-z]/g)
  if ( booleanOfRegExp?.length ){return false}
  //*    ? si el de la izquierda es true continua
  //*    &&   
  try {
    const { data } = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${YOUR_API_KEY}`
    );
    let aryApi = {
      id: data.id,
      name: data.title,
      summary: data.summary,
      image: data.image,
      diets: data.diets,
      dishTypes : data.dishTypes,
      healthScore:data.healthScore,
      analyzedInstructions: data.analyzedInstructions[0]?.steps.map(ste=>`${ste.number}. ${ste.step}`)
    };
    return aryApi
  } catch (e){
    return `A recipe with the id ${id} does not exist.`
  }
}

module.exports={
    findAllApiRecipe,
    RecipeByIdApi,
}