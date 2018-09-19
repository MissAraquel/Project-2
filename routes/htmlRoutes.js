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
