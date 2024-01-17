var socket=new WebSocket("ws://backend.lixiaotuan.cn:8422");
if(socket.readyState!=1){
    socket=new WebSocket("ws://cn-hk-bgp-6.openfrp.top:16666");
}
initialize=function(){
    setInterval(function() {
     socket.send("get battery");
    }, 5000);
}
socket.onmessage = function(event) {
    splitdata=event.data.split(":");
    batteryLevel = parseInt(splitdata[1]);
    document.getElementById('pibattery').style.width = batteryLevel + '%';
    document.getElementById('percent').innerHTML = batteryLevel;
};
$(document).ready(function(){initialize()});