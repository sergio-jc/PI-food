require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const modelRecipe = require('./models/Recipe.js')
const modelType = require('./models/Type.js');
const { receiveMessageOnPort } = require('worker_threads');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/food`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
modelRecipe(sequelize)
modelType(sequelize)
const { Recipe,type } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
// 'carnicor , vegetarino , omnivora  , pesquero'
//* muhcos -> muchos 

Recipe.belongsToMany(type,{through:'type_recipe'})
type.belongsToMany(Recipe,{through:'type_recipe'})

//* uno -> muchos
// type.hasMany(recipe)
// recipe.belongsTo(type)

//* uno -> uno 
// type.hasOne(recipe)
// recipe.belongsTo(type)

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};