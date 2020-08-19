var imageAddr = "https://images.unsplash.com/photo-1592492159418-39f319320569?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"; 
var downloadSize = 4995374; //bytes

function ShowProgressMessage(msg) {
var oProgress = document.getElementById("speed");
if (oProgress) {
var actualHTML = (typeof msg == "string") ? msg : msg.join("<br /><br />");
oProgress.innerHTML = actualHTML;
}
}

//
function InitiateSpeedDetection() {
ShowProgressMessage("Your Internet Speed is...");
window.setTimeout(MeasureConnectionSpeed, 1);
}; 
if (window.addEventListener) {
window.addEventListener('load', InitiateSpeedDetection, false);
} else if (window.attachEvent) {
window.attachEvent('onload', InitiateSpeedDetection,);
}
//

//
function MeasureConnectionSpeed() {
var startTime, endTime;
var download = new Image();
download.onload = function () {
endTime = (new Date()).getTime();
showResults();
}
download.onerror = function (err, msg) {
ShowProgressMessage("Invalid image, or error downloading");
}
startTime = (new Date()).getTime();
var cacheBuster = "?nnn=" + startTime;
download.src = imageAddr + cacheBuster;

//
function showResults() {
var duration = (endTime - startTime) / 1000;
var bitsLoaded = downloadSize * 8;
var speedBps = (bitsLoaded / duration).toFixed(2);
var speedKbps = (speedBps / 1024).toFixed(2);
var speedMbps = (speedKbps / 1024).toFixed(2);
ShowProgressMessage([
speedMbps + " Mbps"
]);
}
}
