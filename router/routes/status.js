var express = require('express');
var router = express.Router();

var db = require('../../resources/db.js');
var tokens = require('../../resources/tokens.js');
/**
 * Returns the device config as json object
 */
router.get('/', function(req, res) {

    db.getStatusInfo(function(status) {

        if(req.query.access_token == tokens.tokens.owner || req.query.access_token == tokens.tokens.write || req.query.access_token == tokens.tokens.read){
            res.json(status);
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
