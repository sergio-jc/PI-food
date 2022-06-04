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
        healthScore:recipe.healthScore,
      }));
      return aryApi
}

module.exports={
    findAllApiRecipe
}