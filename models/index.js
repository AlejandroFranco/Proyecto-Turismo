/**
 * Created by Pablo on 5/06/2016.
 */
var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");
var env       = process.env.NODE_ENV || "development";
var config    = require(path.join(__dirname, '..', 'conf', 'config.json'))[env];
var sequelize = new Sequelize(config.database, config.username, config.password, config);
var DB_TURISMO        = {};

fs
    .readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function(file) {
        var model = sequelize.import(path.join(__dirname, file));
        DB_TURISMO[model.name] = model;
    });

Object.keys(DB_TURISMO).forEach(function(modelName) {
    if ("associate" in DB_TURISMO[modelName]) {
        DB_TURISMO[modelName].associate(DB_TURISMO);
    }
});

DB_TURISMO.sequelize = sequelize;
DB_TURISMO.Sequelize = Sequelize;

module.exports = DB_TURISMO;