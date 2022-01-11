const express = require("express");
const db = require("../models/companyModel.js");

const cardController = {};
cardController.getCards = (req, res, next) => {
	console.log("we caught u!");
	const queryString = `SELECT * FROM cards`;

	db.query(queryString)
		.then((allCards) => {
			res.locals.cards = allCards;
			console.log(res.locals.cards);
			return next();
		})
		.catch((err) => {
			console.log(err);
			return next(err);
		});
};
module.exports = cardController;
