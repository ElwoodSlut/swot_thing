var express = require('express');
var router = express.Router();

/**
 * Unregister route. Is called when the device is deregistered.
 * Sets the device_token to not used.
 */
router.get('/', function(req, res) {
    if(req.query.tokenUsed == 0){
        db.setDeviceToken(req.query.tokenUsed)
        res.send('Now i am deregistered');
    }else{
        // a wrong parameter was sent
        var err = new Error();
        err.status = 406;
        err.message = 'Parameter for command is wrong';
        res.status(406).json(err);
    }

});

module.exports = router;