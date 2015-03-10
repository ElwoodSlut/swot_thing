var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log("asdfasdf");
    res.json({device: {
        "id": 12345,
        "classification": "sdf",
        "functions": [{
            "name": "Function A",
            "url": "www.....",
            "available": true,
            "params": [
                {
                    "name": "Param A",
                    "type": "text/int/double/email...",
                    "required": true
                },
                {
                    "name": "Param B",
                    "type": "text/int/double/email...",
                    "required": false
                }
            ]
        }
        ],
        "status": [
            {

            }
        ]
    }});
});

module.exports = router;
