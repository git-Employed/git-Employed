// const express = require("express");
// const db = require("../models/companyModel.js");

// const usersController = {};
// usersController.getUsers = (req, res, next) => {
// 	console.log("Hello from getUsers controller");
// 	const queryString = `SELECT * FROM users`;
// 	db.query(queryString)
// 		.then((allUsers) => {
// 			res.locals.users = allUsers.rows;
// 			console.log("logging from get users controller", res.locals.users);
// 			return next();
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 			return next(err);
// 		});
// };

// module.exports = usersController;
