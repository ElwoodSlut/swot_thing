var functionsInfo = {
    "functions": [{
        "name": "switch_light",
        "url": "http://localhost:3000/action/switch_light",
        "available": true,
        "parameters": [
            {
                "name": "lightswitch",
                "type": "Choice",
                "choices": [
                    "off", "on"
                ],
                "required": true,
                "constraints": [
                    {
                        "type": "NotBlank",
                        "message": "lightswitch may not be blank"
                    }
                ]
            }
        ]
}]};


module.exports = functionsInfo;