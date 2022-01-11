const path = require("path");
const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const cardController = require("./controllers/cardController.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, "../client")));

app.get("/", (req, res) => {
	res.status(200).sendFile(path.join(__dirname, "../client/index.html"));
});
app.get("/cards", cardController.getCards, (req, res) => {
	// console.log(res.locals.cards);
	return res.status(200).json(res.locals.cards);
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
