const pg = require("pg-promise")(/*initOptions*/);
var db = pg("postgres://postgres:vinojoy@localhost:5432/TradeMy");

module.exports = db;

/*
module.exports = {
	// to use this db connection in another file
	pg,
	db,
};

*/
