var db = require("../models");
var express = require('express');
var router = express.Router();
var passport = require('passport');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

// Load guarded page
router.get("/guarded", 
  ensureLoggedIn('/login'),
  function(req, res) {
    db.User.findOne({ where: { id: req.params.id } })
    .then(function(dbExample) {
      res.render("example", {
        example: dbExample,
        routeNumber: 1,
        user: req.user
      });
    });
  }
); 
router.get("/guarded2", 
  ensureLoggedIn('/login'),
  function(req, res) {
    db.User.findOne({ where: { id: req.params.id } })
    .then(function(dbExample) {
      console.log(req.user);
      res.render("example", {
        example: dbExample,
        routeNumber: 2,
        user: req.user
      });
    });
  }
); 
module.exports = router;

// module.exports = function(app) {
  // Load index page
  // app.get("/", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.render("index", {
  //       msg: "Welcome!",
  //       examples: dbExamples
  //     });
  //   });
  // });

  // // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });
// };