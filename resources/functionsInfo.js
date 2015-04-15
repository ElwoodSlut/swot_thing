var functionsInfo = {
    "functions": [{
        "name": "Switch light",
        "url": "http://localhost:3000/action/switch_light",
        "available": true,
        "parameters": [
            {
                "name": "Light",
                "type": "Choice",
                "choices": [
                    "off", "on"
                ],
                "required": true,
                "constraints": [
                    {
                        "type": "NotBlank",
                        "message": "Light may not be blank"
                    }
                ]
            }
        ]
}]};


module.exports = functionsInfo;