const express = require("express");
const routerUsers = express.Router();
const  {User}   = require("../db/models");


routerUsers.get("/", (req, res, next) => {
  User.findAll().then((users) => res.send(users));
});

routerUsers.post("/", (req, res, next) => {
  console.log(req.body);
  User.create(req.body).then((user) => res.send(user));
});

// aca estaria en http://localhost:3000/users/2/autos
//buscaria todos los autos del user con id 2

routerUsers.get("/:id/autos", (req, res, next) => {

  User.findByPk(req.params.id).then(user =>{
    user.getAutos().then(autos => res.send(autos))
  });

});

routerUsers.get("/:id",(req,res)=>{
  User.findByPk(req.params.id).then((user)=> res.send(user))
})

module.exports = routerUsers;
