
module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();


	//add any API routes here. * THESE ARE NOT WORKING *
	const articleController = require("../controllers/article");


	// GET route to load the single React HTML page.

	// GET route to QUERY MongoDB for all saved articles.
	// router.findAll("/", articleController.findAll);
	// POST route to DELETE a saved article from the database.
	// router.delete("/:id", articleController.remove);
	// POST route to SAVE an article to the database.
	// router.put("/:id", articleController.update);
	
	// module.exports = router;


	return router;
};