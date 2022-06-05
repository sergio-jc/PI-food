const { Router } = require("express");
require("dotenv").config(); // no lo toques es necesario
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {findNameRecipe, allRecipe , addRecite , recipeFoundById , typesFound} = require('../controllers')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/allRecipes',allRecipe) // filtros
router.get('/recipes',findNameRecipe) //  bucador por name 
router.post('/recipe',addRecite)  // crear la carta
router.get("/recipes/:idReceta",recipeFoundById) // buscar por id
router.get("/type",typesFound)


module.exports = router;
