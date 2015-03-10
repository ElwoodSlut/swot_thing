var deviceInfo = {"device": {
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
    }]
}};

console.log(deviceInfo);