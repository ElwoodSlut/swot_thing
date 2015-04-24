var functionsInfo = {
    "functions": [{
        "name": "Switch light",
        "url": baseUrl + "/action/switch_light",
        "available": true,
        "parameters": [
            {
                "name": "light",
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