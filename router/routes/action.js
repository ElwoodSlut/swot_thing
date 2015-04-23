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

        if (req.headers['accesstoken'] != tokens.tokens.owner_token && req.headers['accesstoken'] != tokens.tokens.write_token) {
            var err = new Error();
            err.status = 403;
            err.message = 'You are not permitted to perform this.';
            res.status(403).json(err);
        }else{
            if (req.query.light == "0" || req.query.light == "1") {
                var light = null;
                if (req.query.light == "0") light = "off";
                else light = "on";

                db.setStatus("lamp", light);

                var thingMessage = "light switched to " + light;
                serverCom.sendMessageToServer(thingMessage);
                serverCom.sendInfoUpdateNotification();

                var functionMessage = "Light switched " + light;
                var actionResponse = {
                    "statusCode": 200,
                    "status": "success"
                };
                actionResponse.message = functionMessage;

                res.json(actionResponse);

                io.emit("switch", light);
            } else {
                // a wrong parameter was sent
                var err = new Error();
                err.status = 406;
                err.message = 'Parameter for command is wrong';
                res.status(406).json(err);
            }
        }
});



module.exports = router;