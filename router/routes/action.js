var express = require('express');
var router = express.Router();

var request = require('request');

var db = require('../../resources/db.js');
var tokens = require('../../resources/tokens.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('ACTION TIME');
});

/**
 * Action which turns the prototype 'light' on or off
 */
router.get('/switch_light', function(req, res) {

    if(req.query.access_token != tokens.tokens.owner && req.query.access_token != tokens.tokens.write){
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

        db.getNetworkData(function(accessToken, err) {
            request.post(
                'http://localhost/swot/web/app_dev.php/api/v1/thing/messages',
                {
                    form:
                    { message: 'light switched' },
                    headers: {
                        "content-type" : "application/x-www-form-urlencoded",
                        "accesstoken": accessToken
                    }
                },
                function (error, response, body) {
                    //@TODO: error handling?!
                    if (!error && response.statusCode == 200) {
                        console.log(body)
                    }
                }
            );
        });

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