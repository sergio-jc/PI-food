const { findAllRecipe, findByIdRecipe } = require("./recipe.api&db.js");
const { findAllDbDiets } = require("./recipe.dbController");
const { findAllDishTypes } = require("./recipe.apiController");
const { Recipe, diets } = require("../db");

const findNameRecipe = async (req, res) => {
  try {
    const { name } = req.query;
    if (!name) res.json("no pasaste ningun nombre");
    const aryAllRecipe = await findAllRecipe();
    let allRecipeFinded = aryAllRecipe.filter((e) =>
      e.name.toLowerCase().includes(name.toLowerCase())
    );
    res.json(
      allRecipeFinded.length ? allRecipeFinded : "I did not find the recipe"
    );
  } catch (e) {
    console.log(e);
  }
};

const allRecipe = async (req, res) => {
  const arrayAllRecipe = await findAllRecipe();
  console.log(arrayAllRecipe);
  return res.status(200).json(arrayAllRecipe);
};

const recipeFoundById = async (req, res) => {
  const { idReceta } = req.params;
  if (!idReceta) return res.send("no pasaste un id");
  const recipe = await findByIdRecipe(idReceta);
  res.json(recipe);
};
const addRecipe = async (req, res) => {
  if (!req.body.diets)
    return res.status(400).json("you must select a diet at least");
  if (!req.body.name) return res.status(400).json("The name is required");
  if (!req.body)
    return res.status(400).json("The necessary information was not passed on");
  try {
    const newRecipe = await Recipe.create(req.body);
    req.body.diets.length &&
      req.body.diets.map(async (relaciones) => {
        let dietasDeBd = await diets.findAll({
          where: { name: relaciones },
        });
        newRecipe.addDiets(dietasDeBd);
      });
    res.json(newRecipe);
  } catch (e) {
    res.send(e);
  }
};

const allDiets = async (req, res) => {
  try {
    const typesDiet = await findAllDbDiets();
    res.status(200).json(typesDiet);
  } catch (e) {
    console.log(e);
  }
};

const allDishTypes = async (req, res) => {
  try {
    const allDish = await findAllDishTypes();
    const dishTypes = [...new Set(allDish)];
    res.status(200).json(dishTypes);
  } catch (e) {
    console.log(e);
  }
};

const filterByDiets = async (req,res) => {
  try {
    const allRecipes = await findAllRecipe ()
    console.log(allRecipes)
    const filterRecipe = allRecipes.filter(e=>e.diets.includes(req.params.diet))
    res.status(200).json(filterRecipe)
  } catch (e) {
    console.log(e,'no pasaste ninguna diet')
  }
}

module.exports = {
  findNameRecipe,
  allRecipe,
  addRecipe,
  recipeFoundById,
  allDiets,
  allDishTypes,
  filterByDiets
};
