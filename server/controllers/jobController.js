const express = require("express");
const db = require("../models/companyModel.js");

const jobController = {};
jobController.getCards = (req, res, next) => {
	console.log("we caught u!");
	const queryString = `SELECT * FROM cards`;

	db.query(queryString)
		.then((allCards) => {
			res.locals.cards = allCards;
			return next();
		})
		.catch((err) => {
			console.log(err);
			next(err);
		});
};
module.exports = jobController;