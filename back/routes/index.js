const express = require("express");
const router = express.Router();
//aca importo las rutas de users y las rutas de autos
const users = require("./users");
const autos = require("./autos");


//INDEX DE LAS RUTAS ES ESTO
router.use("/users", users)
router.use("/autos", autos)

module.exports = router;
