const { Router } = require('express');
const { default: axios } = require("axios");
require('dotenv').config();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {recipe,type} = require('../db')
const {
    YOUR_API_KEY
  } = process.env;

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// router.GET /recipes?name="..."
router.get ('/recipes',async (req,res)=>{
    const {name} = req.query
    if (!name) return res.json('no pasaste ningun nombre') 
    const recipeFind = await recipe.findAll()
    let busqueda = recipeFind.filter(e=>e.name.includes(name))
    res.json(busqueda.length ? busqueda : 'no encontre la receta')
})

router.get('/findAll',async(req,res)=>{
    const lola = await recipe.findAll()
   return  res.json(lola)
})

router.get('/recipes/:idReceta',async(req,res)=>{
    const { idReceta } = req.params
    if (!idReceta) return res.send('no pasaste un id')
     const {data}=await axios.get(`https://api.spoonacular.com/recipes/${idReceta}/information?apiKey=${YOUR_API_KEY}`)
     res.json(data)
    // recipe.findAll({where:{id:idReceta}})
    // .then(receta=>res.json(receta[0]))
    // .catch(error=>res.send(error))
})


router.post('/recipe',async (req,res)=>{
    if(!req.body) return res.json('no se paso la informacion necesaria')
    try {
        const newRecipe = await recipe.create(req.body)
        res.json(newRecipe)
    }catch(e){
        res.send('algo salio mal')
    }
})
router.post('/type', (req,res)=>{
    if(!req.body) return res.json('no se paso la informacion necesaria')
    type.create(req.body)
    .then( type=>res.json(type))   
    .catch(error=>res.send('algo salio asdasdasd'))   
})
// GET /recipes/{idReceta}:
router.get('/api',async(req,res)=>{
    const nombre ='Cauliflower, Brown Rice, and Vegetable Fried Rice'
    try{
    const {data} = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&titleMacht=${nombre}&number=100`)
    res.json(data)
  } catch(e){
      console.log(e)
    }
  })

module.exports = router;

// [ ] GET /recipes?name="...":
// Obtener un listado de las recetas que contengan la palabra ingresada como query parameter
// Si no existe ninguna receta mostrar un mensaje adecuado
// [ ] GET /recipes/{idReceta}:
// Obtener el detalle de una receta en particular
// Debe traer solo los datos pedidos en la ruta de detalle de receta
// Incluir los tipos de dieta asociados


// ? [ ] GET /types:
// Obtener todos los tipos de dieta posibles
// En una primera instancia, cuando no exista ninguno, deberán precargar la base de datos con los tipos de datos indicados por spoonacular acá
// [ ] POST /recipe:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body
// Crea una receta en la base de datos

