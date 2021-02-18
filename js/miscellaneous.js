// This file cotains  function to be called in other script fileSize

// for db connection
//var pgp = require("pg-promise")(/* options */);
//var db = pgp("postgres://postgres:vinojoy@localhost:5432/TradeMy");

// end of db connection
/*
export function update() {
	var sql1 =
		'INSERT INTO stk."Update" ("umethod", "uqty", "uprice", "udate", "ucode") VALUES';
	var sql =
		sql1 +
		" ('" +
		nm1 +
		"'" +
		"," +
		"'" +
		cd3 +
		"'," +
		"'" +
		cd2 +
		"','" +
		nm +
		"','" +
		cd +
		"')";

	db.oneOrNone(sql).then((data) => {
		console.log("checking if exists", data.count);
	});
	return p1 * p2; // The function returns the product of p1 and p2
}
*/
/*
export default function hello() {
	return "Hello";
}
*/

export const add = (a, b) => a + b;
