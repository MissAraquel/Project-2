require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var session = require("express-session");
var env = require('dotenv').load();



var PORT = process.env.PORT || 3000;

var db = require("./models");

// Setup for Passport:
var app = express();
//   app.get("/", function(req, res) {
  
//     res.send("Welcome to Passport with Sequelize");

//   });
//   app.listen(3000, function(err) {

//     if (!err)
//         console.log("Site is live");
//     else console.log(err);

//   });
//   var passport = require("passport");
//   LocalStrategy = require("passport-local").Strategy;
//   passport.use(new LocalStrategy(
//     function(username, password, done) {
//       User.findOne({ username: username }, function(err, user) {
//         if (err) { return done(err); }
//         if (!user) {
//           return done(null, false, { message: "Incorrect username." });
//         }
//         if (!user.validPassword(password)) {
//           return done(null, false, { message: "Incorrect password." });
//         }
//         return done(null, user);
//       });
//     }
// ));

//Models
var models = require(".//models");

// Middleware 
// For BodyParser:
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));


// For Passport:
// app.use(session({ secret: "keyboard cat",resave: true, saveUninitialized:true})); // session secret
// app.use(passport.initialize());
// app.use(passport.session()); // persistent login sessions

var Orghunter = require('./config/keys.js');
//var userkey = new Orghunter('keys.Orghunter');


// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

//Import routes and give server access to them
var routes = require("./routes/htmlRoutes.js");
app.use(routes);
require('./routes/apiRoutes.js')(app);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT)
});

// Routes
// require("./routes/apiRoutes")(app);

// var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
// if (process.env.NODE_ENV === "test") {
//   syncOptions.force = true;
// }

// Starting the server, syncing our models ------------------------------------/
// db.sequelize.sync(syncOptions).then(function() {
//   app.listen(PORT, function() {
//     console.log(
//       "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
//       PORT,
//       PORT
//     );
//   });
// });
//Sync Database
// models.sequelize.sync().then(function() {
 
//   console.log("Nice! Database looks fine");

// }).catch(function(err) {

//   console.log(err, "Something went wrong with the Database Update!");

// });

// module.exports = app;
