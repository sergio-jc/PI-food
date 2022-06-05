const { Router } = require("express");
require("dotenv").config(); 
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {findNameRecipe, allRecipe , addRecite , recipeFoundById , allTypes} = require('../controllers')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/allRecipes',allRecipe) // filtros
router.get('/recipes',findNameRecipe) //  bucador
router.post('/recipe',addRecite)  // crear la carta
router.get("/recipes/:idReceta",recipeFoundById) // 
router.get("/type",allTypes)


module.exports = router;
