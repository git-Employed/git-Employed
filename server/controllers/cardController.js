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
		//console.log(req.body.company);
		// const test = `INSERT INTO cards(company,title, salary, location, vibe_check,status, interview)
		// VALUES('Instagram','Frontend Engineer', 170000,'Los Angeles','nice','interested','phone screen')
		// returning *`;
		//to make dynamic
		const company = req.body.company;
		const title = req.body.title;
		const salary = req.body.salary;
		const location = req.body.location;
		const vibe_check = req.body.vibe_check;
		const status = req.body.status;
		const interview = req.body.interview;

		const queryString = `INSERT INTO cards(company,title,location,status)
		VALUES('${company}','${title}', '${location}','${status}') RETURNING *;`;

		//`INSERT INTO cards(company, title, salary, location, vibe_check,status,interview)
		//VALUES($1) RETURNING *
		// VALUES('${company}','${title}', '${salary}', '${location}','${vibe_check}','${status}', '${interview}')
		//($1,$2,$3,$4,$5,$6,$7)
		//'${company}','${title}', '${salary}', '${location}','${vibe_check}','${status}', '${interview}'
		//'${company}','${title}', ${salary},'${location}','${vibe_check}','${status}','${interview}'
		// const test = `INSERT INTO cards(company)
		//  VALUES($1)
		//  returning *`;
		const result = await db.query(queryString, [
			company,
			title,
			location,
			status,
		]);
		res.locals.jobPosting = result.rows;
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
