const { Router } = require("express");
require("dotenv").config(); 
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {findNameRecipe, allRecipe , addRecipe , recipeFoundById , allDiets ,allDishTypes,filterByDiets} = require('../controllers')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/allRecipes',allRecipe) // 
router.get('/recipes',findNameRecipe) //  bucador
router.post('/recipe',addRecipe)  // crear la carta
router.get("/recipes/:idReceta",recipeFoundById) // 
router.get("/type",allDiets)
router.get("/dishTypes",allDishTypes)
router.get("/filter/:diet",filterByDiets)

module.exports = router;


//11d3c8961bfb4215b82b891ad0e2d44d 