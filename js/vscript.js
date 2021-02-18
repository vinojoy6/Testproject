//var res = require("./app.js");
(function () {
	"use strict";

	var subcheck = document.getElementById("sname");
	var dtcheck = document.getElementById("sdate");
	var cdcheck = document.getElementById("cname");
	var udcheck = document.getElementById("udname");
	var umcheck = document.getElementById("umname");
	var uccheck = document.getElementById("ucname");
	var upcheck = document.getElementById("upname");
	var uqcheck = document.getElementById("uqname");

	document.getElementById("Submit").onclick = function () {
		console.log("poda patti");

		if (subcheck.value === "" || dtcheck.value === "" || cname.value === "") {
			alert("please enter all value");
		} else {
			alert("elam entered" + subcheck.value);
		}
	};

	document.getElementById("Submit3").onclick = function () {
		if (
			uqcheck.value === "" ||
			upcheck.value === "" ||
			uccheck.value === "" ||
			umcheck.value === "" ||
			udcheck.value === ""
		) {
			alert("please enter all value");
			var p = (document.getElementById("upname").innerHTML =
				"Page location is " + window.location.href);
			//	alert("please enter all value new" + p);
			//window.location.href = "http://localhost:3000/";
		} else {
			alert("elam entered value is  " + umcheck.value);
		}
	};

	// Your code goes here.
	//document.getElementById("sname").value = "vino1";
	document.getElementById("sname").value;
})();
