const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id : {
      type : DataTypes.INTEGER,
      unique : true,
      primaryKey :true ,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      unique : true ,
      allowNull: false,
    },
    summary :{
      type : DataTypes.TEXT,
      allowNull : false,
    }
  });
};