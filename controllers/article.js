// Controller file for articles.
// ============================
var db = require("../models");

// Define methods for the controller.
module.exports = {
  
// Add new articles to the database.
    create: function(req, res) {
        db.Article
          .create(req.body)
          .then(dbArticle => res.json(dbArticle))
          .catch(err => res.status(422).json(err));
      },
// Find all articles, sort them by date, send them back to the user
    findAll: function(req, res) {
        console.log(req.query);
        db.Article
            .find(req.query)
            .sort({ date: -1 })
            .then(function(dbArticle) {
            res.json(dbArticle);
            });
      },
// Delete the specified headline
      // remove: function(req, res) {
      //   db.Article.remove({ _id: req.params.id }).then(function(dbArticle) {
      //     res.json(dbArticle);
      //   });
      // },
// Update the specified headline
      // update: function(req, res) {
      //   db.Article.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true }).then(function(dbArticle) {
      //     res.json(dbArticle);
      //   });
      // }
};
