var express = require('express');
var fs = require('fs');
var router = express.Router();

var db = require('../../resources/db');

/**
 * Profile Image route. This routes gives access
 * to the profile image of the thing protoype.
 */
router.get('/:file(*)', function(req, res, next){

    var file = req.params.file
    var path = "./resources/" + file;
    var exists = fs.existsSync(path);

    if(!exists){
        var err = new Error();
        err.status = 404;
        err.message = 'Resource not found.';
        res.status(404).json(err);
    }else{
        res.download(path);
    }
});

module.exports = router;
