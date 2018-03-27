
module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();
	const articleController = require("../controllers/article");
	
	// POST route to CREATE new articles and GET route to QUERY MongoDB for all saved articles.
		router.route("/")
			.post(articleController.create)
			.get(articleController.findAll);
			
	// GET and POST routes to DELETE and SAVE articles from the database.
		// router.route("/:id")
		// 	.get(articleController.findbyId)
		// 	.put(articleController.update)
		// 	.delete(articleController.remove);

	return router;
};