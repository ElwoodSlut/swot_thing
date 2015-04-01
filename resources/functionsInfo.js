var functionsInfo = {
    "functions": [{
        "name": "switch_light",
        "url": "localhost:3000/action/switch_light",
        "available": true,
        "parameters": [
            {
                "name": "lightswitch",
                "type": "integer",
                "required": true,
                "constraints": [
                    {
                        "type": "NotNull",
                        "message": "lightswitch may not be null"
                    }
                ]
            }
        ]
}]};


module.exports = functionsInfo;