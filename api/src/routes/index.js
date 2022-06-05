const { Router } = require("express");
const { default: axios } = require("axios");
require("dotenv").config();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Recipe, type } = require("../db");
const { YOUR_API_KEY } = process.env;
const {findNameRecipe, allRecipe , addRecite , recipeFoundById} = require('../controllers')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/allRecipes',allRecipe) // filtros
router.get('/recipes',findNameRecipe) //  bucador
router.post('/recipe',addRecite)  // crear la carta
router.get("/recipes/:idReceta",recipeFoundById) // 


module.exports = router;
