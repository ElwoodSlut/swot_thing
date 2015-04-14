var fs = require('fs');
var express = require('express');
var router = express.Router();
var request = require('request');
var db = require('./db');

var thingFunctions = require('./functionsInfo');


/**
 * Sends a status message to the swot server
 * @param thingMessage The message to send
 */
var sendMessageToServer = function(thingMessage){

    db.getNetworkData(function(accessToken, err) {
        request.post(
            'http://localhost:8080/swot/web/app_dev.php/api/v1/thing/messages',
            {
                form:
                { message: thingMessage },
                headers: {
                    "content-type" : "application/x-www-form-urlencoded",
                    "accesstoken": accessToken
                }
            },
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    console.log("message was send successful");
                    console.log(body);
                }else{
                    console.log("message couldn't be send");
                    console.log(error);
                }
            }
        );
    });
};

/**
 * Sends update notification to the server.
 */
var sendUpdateNotification = function(){

    db.getNetworkData(function(accessToken, err) {
        request.post(
            'http://localhost:8080/swot/web/app_dev.php/api/v1/thing/functions/update',
            {
                form: {message: thingFunctions},
                headers: {
                    "content-type": "application/x-www-form-urlencoded",
                    "accesstoken": accessToken
                }
            },
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    console.log("update was send successful");
                    console.log(body);
                } else {
                    console.log("update couldn't be send");
                    console.log(error);
                }
            }
        );
    });
};

module.exports.sendMessageToServer = sendMessageToServer;
module.exports.sendUpdateNotification = sendUpdateNotification;