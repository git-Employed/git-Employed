const { Pool } = require("pg");

const myURI =
	//"";


//process.env.PG_URI to falsey
const URI = process.env.PG_URI || myURI;
// creating a new instance of a pool to
// we are creating a new object
const pool = new Pool({ connectionString: URI });

//export model 
module.exports = {
	query: (text, params, callback) => {
		console.log("query executed", text);
		return pool.query(text, params, callback);
	},
};
