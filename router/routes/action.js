var express = require('express');
var router = express.Router();

var db = require('../../resources/db.js');
var tokens = require('../../resources/tokens.js');
var serverCom = require('../../resources/serverCommunication');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('ACTION TIME');
});

/**
 * Action which turns the prototype 'light' on or off
 */
router.get('/switch_light', function(req, res) {

    if(req.query.access_token != tokens.tokens.owner_token && req.query.access_token != tokens.tokens.write_token){
        var err = new Error();
        err.status = 403;
        err.message = 'You are not permitted to perform this.';
        res.status(403).json(err);
    }

    if(req.query.lightswitch == "0" || req.query.lightswitch == "1") {

        var light = null;
        if(req.query.lightswitch == 0) light = "off";
        else light = "on";

        db.setStatus("lamp", light);

        var thingMessage = "light switched";
        serverCom.sendMessageToServer(thingMessage);

        var functionMessage = "Light switched " + light;
        var actionResponse = {
            "statusCode":				200,
            "status":					"success",
            "request": {
                "requestedUrl": 		"http://localhost:3000/action/switch_light",
                "functionName": 		"switch_light",
                "params": [
                    {
                        "name": 		"lightswitch",
                        "type": 		"integer",
                        "required": 	true
                    }]
            }};
        actionResponse.message = functionMessage;

        res.json(actionResponse);
    }else{
        // a wrong parameter was sent
        var err = new Error();
        err.status = 406;
        err.message = 'Parameter for command is wrong';
        res.status(406).json(err);
    }
});

module.exports = router;