const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id : {
      type : DataTypes.STRING,
      unique : true,
      allowNull : false,
      primaryKey :true 
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    resumen_del_plato :{
      type : DataTypes.TEXT,
      allowNull : false,
    }
  });
};