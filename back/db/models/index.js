const User = require("./User");
const Auto = require('./Auto');

//ACA ESTABLEZCO LAS RELACIONES ENTRE LOS MODELOS AUTO Y USER!!!!
User.hasMany(Auto,{as:"autos",foreignKey:"ownerId"});

Auto.belongsTo(User, {as:"owner"});
// un auto pertenece a user como 'owner'




module.exports = { User, Auto };
