var db = require("../models");
var express = require('express');
var router = express.Router();
var passport = require('passport');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;
var request = require("request");

//Index/Home
router.get('/', function(req, res) {
  res.render('index');
});
//Profile
router.get('/profile', function(req, res) {
  res.render('profile');
});
//Results
router.get('/results', function (req, res) {
    var userKey = process.env.ORGHUNTER_USER_KEY;
    var resultType = req.query.resultType;

    if (resultType === 'orghunter') {
      handleOrghunterRequest(req, res);
    } else if (resultType === 'eventbrite') {
      handleEventbriteRequest(req, res);
    }
});


function handleOrghunterRequest(req, res) {
  var userKey = process.env.ORGHUNTER_USER_KEY;
  var charityCity = req.query.charityCity;
  var charityType = req.query.charityType;
  var charityState = req.query.charityState;
  var reqUrl = 'http://data.orghunter.com/v1/charitysearch?user_key=' +
                userKey + '&searchTerm=' + charityType + '&city=' +
                charityCity + '&state=' + charityState;

  console.log(reqUrl);
  // res.render('results');

  console.log(reqUrl);
  request(reqUrl, function(err, data) {
    var toParse = data.body || '';

    try {
      var parsedBody = JSON.parse(toParse);
    }catch(error) {}

    // console.log(JSON.stringify(data.body, null, 2));;
    console.log(parsedBody);
    res.render('results', {orgs: parsedBody.data})
  });
}

function handleEventbriteRequest(req, res) {
  var token = process.env.EVENTBRITE_TOKEN;
  var location = req.query.location;
  var reqUrl2 = 'https://www.eventbriteapi.com/v3/events/search/?token=' +
    token + '&q=volunteer&location.address=' + location;


  console.log(reqUrl2);
  request(reqUrl2, function(err, data) {
    var toParse = data.body || '';
    try {
      var parsedBody = JSON.parse(toParse);
    }catch(error) {}



    // console.log(JSON.stringify(data.body, null, 2));;
    console.log(parsedBody)
    console.log(typeof parsedBody);
    debugger;
    res.render('results', parsedBody)
  });
}

// Examples of guarded routes
// router.get("/guarded", 
//   ensureLoggedIn('/login'),
//   function(req, res) {
//     db.User.findOne({ where: { id: req.params.id } })
//     .then(function(dbExample) {
//       res.render("example", {
//         example: dbExample,
//         routeNumber: 1,
//         user: req.user
//       });
//     });
//   }
// ); 
// router.get("/guarded2", 
//   ensureLoggedIn('/login'),
//   function(req, res) {
//     db.User.findOne({ where: { id: req.params.id } })
//     .then(function(dbExample) {
//       console.log(req.user);
//       res.render("example", {
//         example: dbExample,
//         routeNumber: 2,
//         user: req.user
//       });
//     });
//   }
// ); 

//export routes for server.js 
module.exports = router;
