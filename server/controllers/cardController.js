const express = require("express");
const db = require("../models/companyModel.js");

const cardController = {};

cardController.getCards = (req, res, next) => {
	console.log("we caught u!");
	const queryString = `SELECT * FROM cards`;

	db.query(queryString)
		.then((allCards) => {
			// allCards.rows[0] will get you the spotify obj
			res.locals.cards = allCards.rows;
			console.log(res.locals.cards);
			return next();
		})
		.catch((err) => {
			console.log(err);
			return next(err);
		});
};

cardController.postCards = async (req, res, next) => {
	console.log("we are here in post!");
	try {
		//console.log(req.body.title);
		const { title, salary, vibe_check, locatiion, status } = req.body;
		const queryString = `INSERT INTO cards(title, salary, vibe_check, location, status)
 VALUES ('Netflix', '$150,000', 'nice', 'Austin', 'offered')
	RETURNING *`;
		const result = await db.query(queryString);
		res.locals.jobPosting = result;
		return next();
	} catch (err) {
		return next();
	}
};

cardController.deleteCards = async (req, res, next) => {
	console.log("Hi, from the delete controller!");
	try {
		const queryString = `DELETE FROM cards WHERE card_id=3`;
		const result = await db.query(queryString);
		res.locals.goodbye = result;
		return next();
	} catch (err) {
		return next();
	}
};
module.exports = cardController;
