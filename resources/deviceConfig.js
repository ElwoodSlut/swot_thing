var deviceInfo = {"device": {
    "id": 12345,
    "name": "swot_light",
    "classification": "prototype",
    "url": "localhost:3000",
    "functions": [{
        "name": "switch_light",
        "action_url": "localhost:3000/action/switch_light",
        "available": true,
        "params": [
            {
                "name": "lightswitch",
                "type": "integer",
                "required": true
            }
        ]
    }]
}};

module.exports = deviceInfo;