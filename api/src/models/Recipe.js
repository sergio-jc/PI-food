const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {
    id : {
      type : DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      primaryKey : true

    },
    name: {
      type: DataTypes.STRING,
      unique : true ,
      allowNull: false,
    },
    summary :{
      type : DataTypes.TEXT,
      defaultValue : 'This recipe has no summary yet'
    },
    image : {
      type : DataTypes.STRING ,
      defaultValue :'https://us.123rf.com/450wm/blankstock/blankstock1610/blankstock161001411/63549960-plato-de-comida-que-sirve-icono-de-la-muestra-configuraci%C3%B3n-del-vector-en-el-s%C3%ADmbolo-restaurante-com.jpg?ver=6',
    },
    //!OJO AQUI RECUERDA FALTA IMPLEMENTAR LAS DIETAS Y TIPOS DE PLATOS
    // diets :{
    //   type : DataTypes.STRING,
    //   defaultValue : 'Unspecified diet'
    // },
    dishTypes :{
      type: DataTypes.STRING,
      defaultValue : 'Unspecified dish type'
    },
    //!-------------------------------------
    healthScore :{
      type : DataTypes.FLOAT,
      validate : {
        min : 0 ,
        max : 100
      },
      defaultValue : 0
    },
    analyzedInstructions : {
      type : DataTypes.TEXT,
      defaultValue : 'This recipe has no instructions yet'
    }
  });
};
