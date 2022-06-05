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
// [ ] Los campos mostrados en la ruta principal para cada receta (imagen, nombre, tipo de plato y tipo de dieta)
// [ ] Resumen del plato
// [ ] Nivel de "comida saludable" (health score)
// [ ] Paso a paso

module.exports={
    findAllApiRecipe
}