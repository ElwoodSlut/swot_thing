
var socket = io.connect('http://localhost');
socket.on('status message', function (status) {

    console.log(status);

    if( status == "off" ){
        document.getElementById("lamp").className = "lampOff";
        document.getElementById("lamp").innerHTML = "lamp is off";
    }else{
        document.getElementById("lamp").className = "lampOn";
        document.getElementById("lamp").innerHTML = "lamp is on";
    }

});