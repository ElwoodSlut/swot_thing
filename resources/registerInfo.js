var tokens = require('./tokens.js');

var registerInfo = {
    "device": {
        "id": "SWOTY Prototype",
        "classification": "Awesome WoT-Light",
        "url": "http://localhost:3000",
        "api": {
            "profileimage": "http://localhost:3000/downloads/prototype_profile.jpg"
        }
    }};

// add tokens to register info
registerInfo.device['tokens'] = tokens.tokens;

module.exports = registerInfo;