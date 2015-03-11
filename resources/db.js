var fs = require('fs');
var express = require('express');
var router = express.Router();

var file = "resources/tokens.db";

var sqlite3 = require("sqlite3").verbose();

/**
 * Initializes the DB
 */
var initializeDB = function () {
    var exists = fs.existsSync(file);
    if(!exists){
        console.log("DB not found ... creating new one");
        fs.openSync(file, "w");
    }

    // @TODO alternative to open DB?!
    var db = new sqlite3.Database(file);

    db.serialize(function() {
        if (!exists) {
            db.run("CREATE TABLE device_token (token varchar(255), used tinyint)");
            var stmt = db.prepare("INSERT INTO device_token VALUES ('asdfaskdfnvas', 0)");
            stmt.run();
            stmt.finalize();
        }

        //db.each("SELECT token FROM activate_token", function(err, row) { console.log(row.token); });

    });
    db.close();
};

/**
 * Sets the device_token
 * @param tokenUsed Sets the value of the device_token to used or not used.
 */
var setDeviceToken = function(tokenUsed){
    // @TODO alternative to open DB?!
    var db = new sqlite3.Database(file);
    var used = 0;
    if(tokenUsed){ used = 1; }

    // @TODO keep id as indicator what to set?
    db.run("UPDATE device_token SET used = ? WHERE ROWID = ?", tokenUsed, 1);
    db.close();
};

/**
 * Returns the device token
 */
var getDeviceToken = function(callback){
    var db = new sqlite3.Database(file);
    var token;

    // @TODO keep id as indicator what to set?
    db.get("SELECT token FROM device_token WHERE ROWID = ?", 1, function(err, row) {
        callback(row.token, err);
    } );

    db.close();
};

// Exports the functions
module.exports.setDeviceToken = setDeviceToken;
module.exports.initializeDB = initializeDB;
module.exports.getDeviceToken = getDeviceToken;

