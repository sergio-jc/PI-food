const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('type', {
    id : {
      type : DataTypes.STRING,
      unique : true,
      allowNull : false,
      primaryKey :true 
    },
    name :{
        type : DataTypes.ENUM('Gluten Free','Ketogenic','Vegetarian','Lacto-Vegetarian','Ovo-Vegetarian','Vegan','Pescetarian','Paleo','Primal','Low FODMAP','Whole30'),
        allowNull :false
    }
  });
};
