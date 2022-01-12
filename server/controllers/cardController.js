const express = require("express");
const db = require("../models/companyModel.js");

const cardController = {};

//controllers
cardController.getCards = (req, res, next) => {
	console.log("we caught u!");
	const queryString = `SELECT * FROM cards`;
	db.query(queryString)
		.then((allCards) => {
			res.locals.cards = allCards.rows;
			console.log("logging from get cards controller", res.locals.cards);
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
		//test to see if post works
		//const test = `INSERT INTO cards(company,title, salary, location, vibe_check,status, interview)
		//VALUES('Instagram','Frontend Engineer', 170000,'Los Angeles','nice','interested','phone screen')
		//returning *`;

		//to make post dynamic
		const company = req.body.company;
		const title = req.body.title;
		const salary = req.body.salary;
		const location = req.body.location;
		const vibe_check = req.body.vibe_check;
		const status = req.body.status;
		const interview = req.body.interview;

		const queryString = `INSERT INTO cards(company, title, salary, location, vibe_check,status,interview)
		 VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING *`;

		const result = await db.query(queryString, [
			company,
			title,
			salary,
			location,
			vibe_check,
			status,
			interview,
		]);
		res.locals.jobPosting = result.rows;
		return next();
	} catch (err) {
		return next(err);
	}
};

cardController.deleteCards = async (req, res, next) => {
	console.log("Hi, from the delete controller!");
	try {
		//const req.parems
		const queryString = `DELETE FROM cards WHERE card_id=($1)`;
		const result = await db.query(queryString, [card_id]);
		res.locals.goodbye = result;
		return next();
	} catch (err) {
		return next(err);
	}
};

cardController.putCards = async (req, res, next) => {
	console.log("Hey, we are live from the put contoller!");
	try {
		//const res.parems
		const { company, title, salary, location, vibe_check, status, interview } =
			req.params;

		//const test = `UPDATE cards
		//SET vibe_check = 'unfriendly'
		//WHERE card_id = 4`;

		//make post dynamic
		const queryString = `UPDATE cards
		SET company = $1, title = $2, salary = $3, location = $4, vibe_check = $5, status = $6, interview = $7 WHERE card_id = $8`;

		const result = await db.query(queryString, [
			company,
			title,
			salary,
			location,
			vibe_check,
			status,
			interview,
			card_id,
		]);
		res.locals.update = result;
		return next();
	} catch (err) {
		return next(err);
	}
};

module.exports = cardController;
