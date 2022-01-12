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
//     company VARCHAR(50) NOT NULL,
//     title VARCHAR(50) NOT NULL,
//     salary BIGINT,
//     location VARCHAR(50) NOT NULL,
//      vibe_check VARCHAR(50),
//     status VARCHAR(50) NOT NULL,
//     interview VARCHAR(100),
//     created_at TIMESTAMP DEFAULT NOW()
// );

//insert into cards
// INSERT INTO cards (company,title, salary,location,vibe_check, status, interview)
// VALUES ('Spotify', 'Front end engineer', '120,000', 'New York City','nice','pending','phonescreen')
// RETURNING *;

//INSERT INTO cards (company, title, salary, location, vibe_check, status, interview)
//VALUES ('Disney','Frontend Engineer', '150000', 'nice', 'Los Angeles', 'Archive','phone screen')
//RETURNING *;

//INSERT INTO cards (company, title, salary, location, vibe_check, status, interview)
//VALUES ('Spotify','Frontend Engineer', '180000', 'nice', 'New York City', 'Offered','invertBinaryTree: given a binary tree, reverse all of the nodes {8}->{5}{10}-> {2}{6}{7}{12} ==>{8}->{10}{5}-> {12}{7}{6}{2}')
//RETURNING *;

//INSERT INTO cards (company, title, salary, location, vibe_check, status, interview)
//VALUES ('Microsoft','DevOps Engineer', '200000', 'Austin', 'nice', 'interested','recruiter reached out to me' )
//RETURNING *;

//INSERT INTO cards (company, title, salary, location, vibe_check, status, interview)
//VALUES ('Google','Data Engineer', '140000', 'New York City', 'nice', 'interested')
//RETURNING *;

//INSERT INTO cards (company, title, salary, location, vibe_check, status, interview)
//VALUES ('Toast','Junior Engineer', '90000', 'Boston', 'relaxed', 'pending','noDuplicates:given an array of integers return an array with the duplicates removed' )
//RETURNING *;

//deleting
//DELETE FROM tasks WHERE card_id=4;

//updating
//UPDATE cards
//SET vibe_check = 'unfriendly'
//WHERE card_id = 4;

//adding columns to an existing table
// ALTER TABLE cards
// ADD COLUMN company VARCHAR(50),
// ADD COLUMN job_description VARCHAR(50) NOT NULL,
// ADD COLUMN interview_questions VARCHAR(100);

//renaming a columnn
//ALTER TABLE cards
// RENAME COLUMN title TO job_description;

//deleting a column
//ALTER TABLE cards
//DROP COLUMN job_title;

//updating
//UPDATE cards
//SET job_description = 'Front'
//WHERE course_id = 3
