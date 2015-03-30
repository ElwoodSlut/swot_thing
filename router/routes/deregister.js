var express = require('express');
var router = express.Router();

var db = require('../../resources/db');
var tokens = require('../../resources/tokens.js');

/**
 * Unregister route. Is called when the device is deregistered.
 * Sets the device_token to not used.
 */
router.get('/', function(req, res) {

    db.getAccessToken(function(token, used, err) {

        if(used == 1 && req.query.accessToken == token && req.query.token == tokens.tokens.owner){
            db.setAccessTokenFree();
            //TODO: get/delete network data dynamically
            db.deleteNetworkData("swot","prototype");
            res.send({
                "statusCode":				200,
                "status":					"deregistered",
                "message":					"device is deregistered"});
        }else{
            // a wrong parameter was sent
            var err = new Error();
            err.status = 500;
            err.message = 'Something went wrong';
            res.status(500).json(err);
        }

    });
});

module.exports = router;