const db = require("../index");
const S = require("sequelize");

class Auto extends S.Model {}

Auto.init(
    {
      marca: {
        type: S.STRING,
        allowNull: false,
      },
      modelo: {
        type: S.STRING,
        allowNull: false,
      },
      anio: {
        type: S.INTEGER,
        allowNull: false,
      },
      precio: {
        type: S.INTEGER,
        allowNull: false,
      },
      
    },
    { sequelize: db, modelName: "auto" }
  );
  

module.exports = Auto;