const { findAllRecipe , findByIdRecipe } = require("./recipe.api&db.js");
const {findAllDbTypes} = require('./recipe.dbController')
const { Recipe ,Type } = require('../db')

const findNameRecipe = async (req, res) => {
  const { name } = req.query;
  if (!name) res.json("no pasaste ningun nombre");
  const aryAllRecipe = await findAllRecipe();
  let allRecipeFinded = aryAllRecipe.filter((e) =>
    e.name.toLowerCase().includes(name.toLowerCase()));
  res.json(allRecipeFinded.length ? allRecipeFinded : "I did not find the recipe");
};

const allRecipe = async (req, res) => {
  const arrayAllRecipe = await findAllRecipe();
  return res.status(200).json(arrayAllRecipe);
};

const recipeFoundById = async (req,res)=>{
  const { idReceta } = req.params;
  if (!idReceta) return res.send("no pasaste un id");
  const recipe =await findByIdRecipe(idReceta)
  res.json(recipe)
}
const addRecipe = async (req, res) => {
  if(!req.body.diets) return res.json("error")
  if(!req.body.name) return res.json("The name is required")
  if (!req.body) return res.json("The necessary information was not passed on");
  try {
    const newRecipe = await Recipe.create(req.body);
    req.body.diets.length && req.body.diets.map( async(relaciones)=>{
      let dietasDeBd = await Type.findAll({
        where: { name : relaciones }
      });
      newRecipe.addType(dietasDeBd);}
      )
    res.json(newRecipe);
  } catch (e) {
    res.send(e);
  }
};


const allTypes =async (req,res)=>{
  try {
    const typesDiet = await findAllDbTypes ();
    res.status(200).json(typesDiet)
  }catch(e){
    console.log(e)
  }
}

module.exports = {
  findNameRecipe,
  allRecipe,
  addRecipe,
  recipeFoundById,
  allTypes
};
