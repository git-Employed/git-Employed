const path = require("path");
const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const jobController = require("./controllers/jobController.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, "../client")));

app.get("/", (req, res) => {});

app.listen(port, () => {
	console.log(`Server listening on port: ${port}...`);
});
