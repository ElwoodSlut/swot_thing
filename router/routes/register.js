var express = require('express');
var router = express.Router();

var db = require('../../resources/db');
var config = require('../../resources/deviceConfig.js');

/**
 * Register route. Is called when the device is registered.
 * Sets the device_token to used.
 */
router.get('/', function(req, res) {
    /*var token;
    db.getDeviceToken(function(t, err) {
        token = t;
    });*/

    if(req.query.tokenUsed == 1){
        db.setDeviceToken(req.query.tokenUsed)
        //res.json({device: 'Now i am registered'});
        res.json(config);
    }else{
        // a wrong parameter was sent
        var err = new Error();
        err.status = 406;
        err.message = 'Parameter for command is wrong';
        res.status(406).json(err);
    }

});

module.exports = router;