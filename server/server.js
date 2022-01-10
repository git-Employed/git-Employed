const path = require("path");
const express = require("express");
const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, "../client")));

app.listen(port, () => {
	console.log(`Server listening on port: ${port}...`);
});
