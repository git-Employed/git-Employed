const dotenv = require("dotenv");
dotenv.config();
const { Pool } = require("pg");

const myURI = process.env.URI;
const URI = process.env.PG_URI || myURI;

// creating a new instance of a pool
const pool = new Pool({ connectionString: myURI });

//export model
module.exports = {
	query: (text, params, callback) => {
		console.log(myURI);
		console.log("query executed", text);
		return pool.query(text, params, callback);
	},
};

//CREATE TABLE CARDS
// CREATE TABLE cards(
//     card_id INT GENERATED ALWAYS AS IDENTITY,
//     PRIMARY KEY(card_id),
//     title VARCHAR(50) NOT NULL,
//     salary VARCHAR(50),
//     vibe_check VARCHAR(50),
//     location VARCHAR(50) NOT NULL,
//     status VARCHAR(50) NOT NULL,
//     created_at TIMESTAMP DEFAULT NOW()
// );

//INSERT INTO cards
// INSERT INTO cards (title, salary, vibe_check, location, status)
// VALUES ('Spotify', '$120000', 'nice', 'New York City', 'pending')
// RETURNING *;

// INSERT INTO cards (title, salary, vibe_check, location, status)
// VALUES ('Disney', '$150000', 'nice', 'Los Angeles', 'Archive')
// RETURNING *;

// INSERT INTO cards (title, salary, vibe_check, location, status)
// VALUES ('Google', '$180,000', 'nice', 'Remote', 'Offered')
// RETURNING *;

// INSERT INTO cards (title, salary, vibe_check, location, status)
// VALUES ('LinkedIn', '$140,000', 'nice', 'Remote', 'Interested')
// RETURNING *;

//DELETE
//DELETE FROM tasks WHERE card_id=4;
