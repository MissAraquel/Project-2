var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/user", function (req, res) {
    db.User.findAll({}).then(function (dbExamples) {
      res.json(dbExamples);
    });
  });
  // Create a new user
  app.post("/api/user", function (req, res) {
    db.User.create(req.body).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/user/:id", function (req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  // // search history table by the user's id
  app.get("/api/profile/:id", function (req, res) {
    db.History.query(`SELECT Users.email, Users.first_name, Users.last_name, Users.location, Histories.org_name, Histories.org_link, Histories.createdAt 
    FROM Users, Histories 
    WHERE Histories.user_id = Users.id;`).then(function (dbData) {
      res.json(dbData);
      console.log(dbData);
    });
  });
};