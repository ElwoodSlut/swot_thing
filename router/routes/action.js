var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('ACTION TIME');
});

/**
 * Action which turns the prototype 'light' on or off
 */
router.get('/switch_light', function(req, res) {
    if(req.query.lightswitch == 1) {
        res.json({
            "statusCode":				200,
            "status":					"success",
            "message":					"Light switched on",

            "request": {
                "requestedUrl": 		"http://localhost:3000/action/switch_light",
                "functionName": 		"switch_light",
                "params": [
                    {
                        "name": 		"lightswitch",
                        "type": 		"integer",
                        "required": 	true
                    }]
            }});
    }else if( req.query.lightswitch == 0 ) {
        res.json({
            "statusCode":				200,
            "status":					"success",
            "message":					"Light switched off",

            "request": {
                "requestedUrl": 		"http://localhost:3000/action/switch_light",
                "functionName": 		"switch_light",
                "params": [
                    {
                        "name": 		"lightswitch",
                        "type": 		"integer",
                        "required": 	true
                    }]
            }});
    }else{
        // a wrong parameter was sent
        var err = new Error();
        err.status = 406;
        err.message = 'Parameter for command is wrong';
        res.status(406).json(err);
    }
});

module.exports = router;