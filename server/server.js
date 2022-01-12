const path = require("path");
const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const cardController = require("./controllers/cardController.js");
//const usersController = require("./controllers/usersController.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, "../client")));

app.get("/api", (req, res) => {
	res.status(200).sendFile(path.join(__dirname, "../client/index.html"));
});

//middleware for users
// app.get("/api/users", usersController.getUsers, (req, res) => {
// 	return res.status(200).json(res.locals.users);
// });

// middleware for cards
app.get("/api/cards", cardController.getCards, (req, res) => {
	// console.log(res.locals.cards);
	return res.status(200).json(res.locals.cards);
});

app.post("/api/cards", cardController.postCards, (req, res) => {
	//console.log(res.locals.jobPosting);
	return res.status(200).json(res.locals.jobPosting);
});

app.delete("/api/cards", cardController.deleteCards, (req, res) => {
	console.log(res.locals.goodbye);
	return res.status(200).json(res.locals.goodbye);
});

app.put("/api/cards", cardController.putCards, (req, res) => {
	return res.status(200).json(res.locals.update);
});

app.use((err, req, res, next) => {
	const defaultErr = {
		log: "Express error handler caught unknown middleware error",
		status: 400,
		message: { err: "An error occurred" },
	};
	const errorObj = Object.assign({}, defaultErr, err);
	console.log(errorObj.log);
	return res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, () => {
	console.log(`Server listening on port: ${port}...`);
});
