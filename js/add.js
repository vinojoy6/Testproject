let db = require("./dbconn.js");
let appli = require("../app.js");

//let rest = require("./app.js");

//https://stackoverflow.com/questions/5797852/in-node-js-how-do-i-include-functions-from-my-other-files

const update1 = function (sql) {
	db.oneOrNone(sql).then((data) => {
		console.log("Adding to DB", sql);
	});

	//return p;
};

//const search = function (sn)
//const search = async function (sn) {

const search = async function (sn) {
	//	v1 = 'select count(*)  from stk."Update" where ("ucode" =' + "'" + sn + "')";
	v1 = 'select *  from stk."Update" where ("ucode" =' + "'" + sn + "') limit 1";
	console.log("search page", v1);

	return db.oneOrNone(v1).then((data) => {
		console.log("abe to find value of method", data.umethod);
		console.log("abe to find value of quantity", data.uqty);
		console.log("abe to find value of price", data.uprice);
		console.log("abe to find value of date", data.udate);
		console.log("abe to find value of nyse code", data.ucode);
		anmethod = data.umethod;
		anqty = data.uqty;
		anprice = data.uprice;
		andate = data.udate;
		ancode = data.ucode;
		//	console.log("abe to find value after variable", ancount);
		//return ancount;
		return {
			anmethod,
			anqty,
			anprice,
			andate,
			ancode,
		};
	});
};

module.exports = {
	update1,
	search,
};
