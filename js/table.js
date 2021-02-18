(function () {
	"use strict";

	var subcheck = document.getElementById("Tcname");

	var cdcheck = document.getElementById("Tcode");
	var cdcheck = document.getElementById("Tmethod");
	var cdcheck = document.getElementById("Tprice");
	var cdcheck = (document.getElementById("Tqty").value = "2");
	console.log("vannu alle");
	var cc = document.getElementById("Date").innerHTML;
	app.post("/AnaSubmit", function (req, res) {
		console.log(req.body);
	});
});
