var tokens = require('./tokens.js');

var registerInfo = {
    "device": {
        "name": "SWOTY Prototype Light",
        "description": "Awesome WoT-Light! You can turn it on and off, as you like!",
        "profileimage": baseUrl + "/downloads/prototype_profile.jpg",
        "api": {
            "url": baseUrl
        }
    }};

// add tokens to register info
registerInfo.device['tokens'] = tokens.tokens;

module.exports = registerInfo;