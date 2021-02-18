var express = require("express");
var bodyParser = require("body-parser");
var app = express();
//var ancount;

var tools = require("./js/add.js");
var db = require("./js/dbconn.js");
//var vj = require("./js/vscript.js");

const { Pool } = require("pg");
var path = require("path");

app.set("view engine", "ejs");
const { response } = require("express");
const { resolve } = require("url");

app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

app.use(express.static("public"));
app.use(express.static("files"));

app.use("/js", express.static("public"));

// viewed at http://localhost:8080

app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname + "/index.html"));

	//	res.sendFile(path.join(__dirname + "/"));

	app.use(express.static(path.join(__dirname + "/js")));
});

// this block is for New Share form
app.post("/Submit", function (req, res) {
	console.log(req.body);
	if (req.body.fname !== "" && req.body.nname !== "" && req.body.cname !== "") {
		//if entered all values

		//INSERT INTO stk."Entry" ("Date", "Stname") VALUES('2020-07-23', 'MATTHEWS INDIA FUND');
		var nm = req.body.nname; // script name
		var nm1 = req.body.fname; // date
		var cd = req.body.cname; // script code
		//select * from stk."Entry" where "Stname" = 'vino';
		//	select count(*) from stk."Entry" where "Stname" = 'vino' or "Stname" = 'vino3' ;
		vali =
			'select count(*)  from stk."Entry" where "Stname" =' +
			"'" +
			nm +
			"'" +
			"or" +
			'"code" =' +
			"'" +
			cd +
			"'";

		var sql1 = 'insert into stk."Entry" ("Date","Stname","code") values';
		var sql =
			sql1 + " ('" + nm1 + "'" + "," + "'" + nm + "'," + "'" + cd + "')";

		console.log("return value is ", vali);

		db.oneOrNone(vali).then((data) => {
			// checking if its already existing
			console.log("checking if exists", data.count);

			if (data.count == 0) {
				// if return value is 0 , mean no values exists
				console.log("good its new value you can add it", nm);
				db.oneOrNone(sql).then((data) => {
					console.log("sucessfully script added", nm);
					//	res.send("sucessfully script added");
					res.redirect("http://localhost:3000/");
				});
			} else {
				// its already exists
				console.log("sorry this value already exists", nm);

				//	res.send("sorry this script already exists");
				res.redirect("http://localhost:3000/");
			}
		});
	} else {
		// you can not leave any filed blank
		console.log("some values are not entered");

		//res.send("some values are not entered");
		res.redirect("http://localhost:3000/");
	}
});

// This block is for Update Todays values
app.post("/Submit3", function (req, res) {
	console.log("enthi mone submit 3 loop", req.body);

	var nm = req.body.udname; // Date
	var nm1 = req.body.umname; // Method of purchase  busy or sell
	var cd = req.body.ucname; // nyse code
	var cd2 = req.body.upname; //price per share
	var cd3 = req.body.uqname; // quantity
	//select * from stk."Entry" where "Stname" = 'vino';
	//	select count(*) from stk."Entry" where "Stname" = 'vino' or "Stname" = 'vino3' ;
	//	INSERT INTO stk."Update" ("umethod", "uqty", "uprice", "udate", "ucode") VALUES('BUY','2','2','2020-07-23', 'MAU');
	vali = 'select count(*)  from stk."Entry" where ("code" =' + "'" + cd + "')";
	console.log("Checking if code already added ", vali);

	//if (req.body.fname !== "" && req.body.nname !== "" && req.body.cname !== "") {

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
	res;
	//console.log("return value is ", p);

	// redesing

	if (
		// checking if all fileds are entered or not
		req.body.udname !== "" &&
		req.body.umname !== "" &&
		req.body.ucname !== "" &&
		req.body.upname !== "" &&
		req.body.uqname !== ""
	) {
		db.oneOrNone(vali).then((data) => {
			// checking if nyc code exists or not
			console.log("checking if exists", data.count);

			if (data.count == 0) {
				// checking if this nyce code exists in first schema

				res.redirect("http://localhost:3000/");
			} else {
				tools.update1(sql);
				//	res.send("Todays values are updated to db");

				//res.send("enterd");

				res.redirect("http://localhost:3000/");
			}
		}); // end of db.oneone function
	} else {
		// if all or any of the fields are not added
		//res.status(400).send("its bad request");
		console.log("some values are not entered");

		res.redirect("http://localhost:3000/");
		//	res.send("some values are not entered");
	}
});

// This block is to analyse current stock from index.html
app.get("/Analysis", function (req, res) {
	res.sendFile(path.join(__dirname, "/Analysis.html"));
});

app.post("/AnaSubmit", function (req, res) {
	// this block is to search and give history of script
	//req.send(" thsi correct page");

	var sn = req.body.acname;
	console.log(" analysis page", sn);

	/*
	const ann = await tools.search(sn)
	console.log(" ann",ann)
	res.render("anasubmit");

	
*/

	tools
		.search(sn)
		.then((ann) => {
			console.log("retun value ancount is ", ann);
			anmeth = anmethod;
			anqt = anqty;
			anpric = anprice;
			andat = andate;
			ancod = ancode;

			console.log("loopil", anmethod);
			console.log("loopil", anqty);
			res.render("anasubmit");
		})
		.catch((error) => {
			console.log("try catch error", error);
			anmeth = "";
			anqt = "";
			anpric = "";
			andat = "";
			ancod = "pelase enter values";
			res.render("anasubmit");
		});
});

app.listen(3000);
