var express = require('express');
var router = express.Router();

var config = require('../../resources/deviceConfig.js');

/**
 * Returns the device config as json object
 */
router.get('/', function(req, res) {
    res.json(config);
});

module.exports = router;
