const { findAllRecipe } = require("./recipe.api&db.js");

const findNameRecipe = async (req,res) => {
  const { name } = req.query;
  if (!name) {
     res.json("no pasaste ningun nombre")
    };
  
  const aryAllRecipe = await findAllRecipe();
  let allRecipeFinded = aryAllRecipe.filter((e) =>
    e.name.toLowerCase().includes(name.toLowerCase())
  );
  res.json(allRecipeFinded.length ? allRecipeFinded : "no encontre la receta");
};

const allRecipe = async (req,res)=>{
  const arrayAllRecipe = await findAllRecipe()
  return res.status(200).json(arrayAllRecipe)
}

module.exports={
    findNameRecipe,
    allRecipe
}