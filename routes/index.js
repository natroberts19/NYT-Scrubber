module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();
	// CALL the apiRoutes function here:
	const apiRoutes = require("./apiRoutes.js")();
	//or, if you want to be able to lock down your apiRoutes. Remember this for final proj!
	router.use("/auth",require("./authRoutes.js")(passport));
	router.use("/api",require("./apiRoutes.js")(passport));


	// GET route to load the single React HTML page. If no API routes are hit, send the React app here:
	router.use(function(req, res) {
	  res.sendFile(path.join(__dirname, "../client/index.html"));
	});

	return router;
};