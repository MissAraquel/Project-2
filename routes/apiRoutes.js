var db = require("../models");
var request = require("request");

module.exports = function (app) {
  // Get all examples
  app.get("/api/user", function (req, res) {
    db.User.findAll({}).then(function (weWannaHelp_db) {
      res.json(weWannaHelp_db);
    });
  });
  // Create a new user
  app.post("/api/user", function (req, res) {
    db.User.create(req.body).then(function (weWannaHelp_db) {
      res.json(weWannaHelp_db);
    });
  });

  // Delete an example by id
  app.delete("/api/user/:id", function (req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (weWannaHelp_db) {
      res.json(weWannaHelp_db);
    });
  });

  // search history table by the user's id


  app.get("/api/profile/:id", function (req, res) {
    db.History.query("SELECT Users.email,Users.first_name, Users.last_name, Users.location, Histories.org_name, Histories.org_link, Histories.createdAt" , 
    "FROM Users, Histories",
    "WHERE Histories.user_id = Users.id;").then(function (weWannaHelp_db) {
      res.json(weWannaHelp_db);
      console.log(weWannaHelp_db);
    });
  });

  console.log('hello from route file');
  app.get('/api/orghunter', function(req, res) {
    console.log('hi');
    var userKey = process.env.ORGHUNTER_USER_KEY;
    var charityCity = req.query.charityCity;
    var charityType = req.query.charityType;
    var charityState = req.query.charityState;
    var reqUrl = 'http://data.orghunter.com/v1/charitysearch?user_key=' +
                  userKey + '&searchTerm=' + charityType + '&city=' +
                  charityCity + '&state=' + charityState;

    console.log(reqUrl);
    request(reqUrl, function(err, data) {
      console.log(data);
      res.json({hi: 'hello'});
    });
  });


  console.log('hello from route file');
  app.get('/api/eventbrite', function(req, res) {
    console.log('hi2');
    var token = process.env.EVENTBRITE_TOKEN;
    var location = req.query.location.address;
    var reqUrl2 = 'https://www.eventbriteapi.com/v3/events/search/?token=' +
                  token + '&q=volunteer&location.address=' + location;

    console.log(reqUrl2);
    request(reqUrl2, function(err, data) {
      console.log(data);
      res.json({hi: 'hello'});
    });
  });


};