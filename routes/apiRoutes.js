var db = require("../models");
var request = require("request");

module.exports = function(app) {
  // Get all examples
//   app.get("/api/examples", function(req, res) {
//     db.Example.findAll({}).then(function(dbExamples) {
//       res.json(dbExamples);
//     });
//   });

//   // Create a new example
//   app.post("/api/examples", function(req, res) {
//     db.Example.create(req.body).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });

//   // Delete an example by id
//   app.delete("/api/examples/:id", function(req, res) {
//     db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });
// };

// // search history table by the user's id
  app.get("/api/profile/:id", function(req, res) {
    db.History.query(`SELECT Users.email, Users.first_name, Users.last_name, Users.location, Histories.org_name, Histories.org_link, Histories.createdAt 
    FROM Users, Histories 
    WHERE Histories.user_id = Users.id;`).then(function(dbData){
      res.json(dbData);
      console.log(dbData);
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
};
