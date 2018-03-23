module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();
	const apiRoutes = require("./apiRoutes.js");


	router.use("/auth",require("./authRoutes.js")(passport));
	router.use("/api", apiRoutes);


	// GET route to load the single React HTML page. If no API routes are hit, send the React app here:
	router.use(function(req, res) {
	  res.sendFile(path.join(__dirname, "../client/index.html"));
	});

	return router;
};