var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('ACTION TIME');
});

/**
 * Action which turns the prototype 'light' on or off
 */
router.get('/first_action', function(req, res) {
    if(req.query.action === "on") {
        res.json({lamp: 'on'});
    }else if( req.query.action === "off" ) {
        res.json({lamp: 'off'});
    }else{
        // a wrong parameter was sent
        var err = new Error();
        err.status = 406;
        err.message = 'Parameter for command is wrong';
        res.status(406).json(err);
    }
});

module.exports = router;