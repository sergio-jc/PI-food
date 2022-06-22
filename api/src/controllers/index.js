const { findAllRecipe, findByIdRecipe } = require("./recipe.api&db.js");
const { findAllDbDiets, findAllDbRecipe } = require("./recipe.dbController");
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

const allRecipe = (req, res) => {
  findAllRecipe().then((e) => {
    console.log(e);
    return res.status(200).json(e);
  });
};

const recipeFoundById = async (req, res) => {
  try {
    const { idReceta } = req.params;
    if (!idReceta) return res.send("no pasaste un id");
    const recipe = await findByIdRecipe(idReceta);
    res.json(recipe);
  } catch (e) {
    console.log(e);
  }
};
const addRecipe =  (req, res) => {
  if (!req.body.diets)
    return res.status(400).json("you must select a diet at least");
  if (!req.body.name) return res.status(400).json("The name is required");
  if (!req.body)
    return res.status(400).json("The necessary information was not passed on");
  Recipe.create(req.body).then((newRecipe) => {
    req.body.diets.length &&
      req.body.diets.map((relaciones) => {
        diets
          .findAll({
            where: { name: relaciones },
          })
          .then((dietasDeBd) => {
            newRecipe.addDiets(dietasDeBd);
          });
      });
    res.json(newRecipe);
  });
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
    const dishTypes = [...new Set (allDish)];
    res.status(200).json(dishTypes);
  } catch (e) {
    console.log(e);
  }
};

const filterByDiets = (req, res) => {
  findAllRecipe().then((allRecipes) => {
    if (req.params.diet === "recipes") return res.json(allRecipes);
    findAllDbRecipe().then((DbDiets) => {
      const filterApi = allRecipes.filter((e) =>
        e.diets.includes(req.params.diet)
      );
      const filterDb = DbDiets.filter((e) =>
        e.diets.map((e) => e.name).includes(req.params.diet)
      );
      const filterRecipe = [...filterApi, ...filterDb];
      res.status(200).json(filterRecipe);
    });
  });
};

module.exports = {
  findNameRecipe,
  allRecipe,
  addRecipe,
  recipeFoundById,
  allDiets,
  allDishTypes,
  filterByDiets,
};
