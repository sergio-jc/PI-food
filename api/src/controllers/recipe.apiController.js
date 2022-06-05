const { YOUR_API_KEY } = process.env;
const { default: axios } = require("axios");

const findAllApiRecipe = async ()=>{
    const { data } = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=100`
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
}

module.exports={
    findAllApiRecipe,
    RecipeByIdApi
}