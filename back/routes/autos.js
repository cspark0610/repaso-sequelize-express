const express = require("express");
const routerAutos = express.Router();
const { Auto, User } = require("../db/models/");

//ACA YA ESTOY PARADO EN LA RUTA '/autos !!!

routerAutos.get("/", (req, res, next) => {
	Auto.findAll({
		include: {
			model: User,
			as: "owner",
			attributes: ["name", "lastname"],
		},
	}).then((autos) => res.send(autos));
});

routerAutos.post("/", (req, res, next) => {
	Auto.create(req.body).then((autoCreado) => {
		//console.log(autoCreado);
		autoCreado.getOwner()
			.then((resp) => resp.dataValues)
			.then((owner) => {
				const ownerData = { name: owner.name, lastname: owner.lastname };
				const auto = { ...autoCreado.dataValues, owner: ownerData };

				res.send(auto);
			});
	});
});

//6. Crear en el **back** la ruta correspondiente para buscar un auto en particular.
routerAutos.get("/:id", (req, res, next) => {
	Auto.findByPk(req.params.id).then((auto) => res.send(auto));
});

//ruta para encontrar el owner de cada auto
routerAutos.get("/:id/owner", (req, res) => {
	Auto.findByPk(req.params.id).then((auto) => {
		auto.getOwner().then((owner) => res.send(owner));
	});
});

module.exports = routerAutos;
