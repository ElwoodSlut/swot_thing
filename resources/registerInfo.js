var tokens = require('./tokens.js');

var registerInfo = {
    "device": {
        "id": 12345,
        "classification": "sdf",
        "url": "http://localhost:3000",
        "api": {
            "deregister": "http://localhost:3000/deregister",
            "function": "http://localhost:3000/functions",
            "status": "http://localhost:3000/status"
        }
    }};

// add tokens to register info
registerInfo.device['tokens'] = tokens.tokens;

module.exports = registerInfo;