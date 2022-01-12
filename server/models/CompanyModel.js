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

//creating a card table with a foriegn key of users
//CREATE TABLE cards(
//card_id INT GENERATED ALWAYS AS IDENTITY,
// user_name VARCHAR,
// PRIMARY KEY(card_id),
// FOREIGN KEY (user_name) REFERENCES users(user_name),
// company VARCHAR(50) NOT NULL,
// title VARCHAR(50) NOT NULL,
// salary BIGINT,
// location VARCHAR(50) NOT NULL,
// vibe_check VARCHAR(50),
// status VARCHAR(50) NOT NULL,
// interview VARCHAR(100),
// created_at TIMESTAMP DEFAULT NOW()
//  );

// creating a user table
//CREATE TABLE users(
// user_name VARCHAR NOT NULL,
//PRIMARY KEY(user_name),
//created_at TIMESTAMP DEFAULT NOW()
//)

//inserting into the users table
//INSERT INTO users (user_name)
//VALUES ('AllieMarzieh')
//RETURNING *;

//posting into the cards table

//INSERT INTO cards (user_name,company, title, salary, location, vibe_check, status, interview)
//VALUES ( 'AllieMarzieh','Disney','Frontend Engineer', '140000', 'LA', 'chill', 'Archive','recruiter reached out' )
//RETURNING *;

//INSERT INTO cards (user_name,company, title, salary, location, vibe_check, status, interview)
//VALUES ( 'AllieMarzieh','Spotify','Frontend Engineer', '180000', 'NYC', 'chill', 'pending','invertBinaryTree: data structures question' )
//RETURNING *;

//INSERT INTO cards (user_name,company, title, salary, location, vibe_check, status, interview)
//VALUES ( 'AllieMarzieh','Microsoft','DevOps Engineer', '170000', 'Austin', 'nice', 'pending','phonescreen' )
//RETURNING *;

//INSERT INTO cards (company, title, salary, location, vibe_check, status, interview)
//VALUES ( 'Google','Data Engineer', '140000', 'New York City', 'nice', 'interested', 'Max Depth')
//RETURNING *;

//INSERT INTO cards (company, title, salary, location, vibe_check, status, interview)
//VALUES ( 'Disney','Frontend Engineer', '14000000000', 'LA', 'chill', 'Archive','recruiter reached out' )
//RETURNING *;

//INSERT INTO cards (user_name,company, title, salary, location, vibe_check, status, interview)
//VALUES ( 'AllieMarzieh','Toast','Junior Engineer', '90000', 'Boston', 'relaxed', 'pending','noDuplicates:given an array of integers return an array with the duplicates removed' )
//RETURNING *;

//deleting from the cards table
//DELETE FROM tasks WHERE card_id=4;

//updating the cards table
//UPDATE cards
//SET vibe_check = 'unfriendly'
//WHERE card_id = 4;
