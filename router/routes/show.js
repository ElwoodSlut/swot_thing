var express = require('express');
var router = express.Router();

var db = require('../../resources/db');

/**
 * Show route. It's the main route to visiualize the status.
 */
router.get('/', function(req, res) {

    db.getStatusInfo(function(status, err){
        var light = false;
        if(status.lamp == "on") light = true;
        res.render('index', { title: 'lamp status', message: light});
    })

});

module.exports = router;
