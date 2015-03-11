var deviceInfo = {"device": {
    "id": 12345,
    "classification": "prototype",
    "functions": [{
        "name": "first_action",
        "url": "localhost:3000/action/first_action",
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
    }]
}};

module.exports = deviceInfo;