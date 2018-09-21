"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(__filename);
var env = process.env.NODE_ENV || "development";
var config = require(path.join(__dirname + "/../config/config.json"))[env];
// var mysql = require(mysql);
var sequelize = new Sequelize(config.database, config.username, config.password, config);
var db = {};
var connection;

// if (process.env.JAWSDB_URL){
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//   connection = mysql.createConnection({
//     host: 'localhost', 
//     user: 'root',
//     password: 'password',
//     database: 'weWannaHelp_db'
//   });
// }

// let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs.readdirSync(__dirname)
  .filter(function(file) {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(function(file) {
    console.log(file);
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

  // Generic association
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    console.log(db);
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
