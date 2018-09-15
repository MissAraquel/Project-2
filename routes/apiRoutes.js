var db = require("../models");

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
};
