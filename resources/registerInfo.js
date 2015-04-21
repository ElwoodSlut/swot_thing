var tokens = require('./tokens.js');

//@TODO in registerInfo: deregister/function/information really needed...or build together in the network

var registerInfo = {
    "device": {
        "id": "SWOTY Prototype",
        "classification": "Awesome WoT-Light",
        "url": "http://localhost:3000",
        "api": {
            "deregister": "http://localhost:3000/deregister",
            "function": "http://localhost:3000/functions",
            "information": "http://localhost:3000/information",
            "profileimage": "http://localhost:3000/downloads/prototype_profile.jpg"
        }
    }};

// add tokens to register info
registerInfo.device['tokens'] = tokens.tokens;

module.exports = registerInfo;