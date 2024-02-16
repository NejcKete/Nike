/*function updateTimer() {
    // Check if there's a stored time
    let storedTime = localStorage.getItem('websiteTimer');

    // If there's no stored time, set it to 0
    let currentTime = storedTime ? parseInt(storedTime) : 0;

    // Update the timer every second
    setInterval(function () {
        currentTime++;
        localStorage.setItem('websiteTimer', currentTime);
        document.getElementById('timer').innerText = formatTime(currentTime);
    }, 1000);
}

// Format time into days, hours, minutes, and seconds
function formatTime(seconds) {
    let days = Math.floor(seconds / (24 * 3600));
    let hours = Math.floor((seconds % (24 * 3600)) / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let remainingSeconds = seconds % 60;

    return `${days} days ${hours} hours ${minutes} minutes ${remainingSeconds} seconds`;
}

// Call the function to start the timer
updateTimer();

// Event listener for page unload (resetting timer)
window.addEventListener('beforeunload', function () {
    localStorage.removeItem('websiteTimer');
});*/

var countDownDate = new Date().getTime()+86400000;

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("timer").innerHTML = "Sales expire in "+days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);

var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');



// Assuming you have a canvas element with id 'myCanvas'
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

// Scale factor and translation for the new position (0,0) and size (200 by 200)
var scaleFactor = 200 / 1135;  // 1135 is the original width
var xOffset = -110; // Adjust this value to move the shape horizontally
var yOffset = -350; // Adjust this value to move the shape vertically

context.beginPath();
context.moveTo((245.8075 + xOffset) * scaleFactor, (717.62406 + yOffset) * scaleFactor);
context.bezierCurveTo((216.01162 + xOffset) * scaleFactor, (716.4403599999999 + yOffset) * scaleFactor, (191.6341 + xOffset) * scaleFactor, (708.28726 + yOffset) * scaleFactor, (172.57291 + xOffset) * scaleFactor, (693.14446 + yOffset) * scaleFactor);
context.bezierCurveTo((168.93516 + xOffset) * scaleFactor, (690.25166 + yOffset) * scaleFactor, (160.26680000000002 + xOffset) * scaleFactor, (681.57816 + yOffset) * scaleFactor, (157.35864 + xOffset) * scaleFactor, (677.91996 + yOffset) * scaleFactor);
context.bezierCurveTo((149.62906 + xOffset) * scaleFactor, (668.20066 + yOffset) * scaleFactor, (144.37397 + xOffset) * scaleFactor, (658.74146 + yOffset) * scaleFactor, (140.86887000000002 + xOffset) * scaleFactor, (648.2465599999999 + yOffset) * scaleFactor);
context.bezierCurveTo((130.08317000000002 + xOffset) * scaleFactor, (615.9404599999999 + yOffset) * scaleFactor, (135.63418000000001 + xOffset) * scaleFactor, (573.54766 + yOffset) * scaleFactor, (156.74640000000002 + xOffset) * scaleFactor, (527.02226 + yOffset) * scaleFactor);
context.bezierCurveTo((174.82290000000003 + xOffset) * scaleFactor, (487.19066 + yOffset) * scaleFactor, (202.71572000000003 + xOffset) * scaleFactor, (447.68566 + yOffset) * scaleFactor, (251.37892000000002 + xOffset) * scaleFactor, (392.97146 + yOffset) * scaleFactor);
context.bezierCurveTo((258.54728 + xOffset) * scaleFactor, (384.92035999999996 + yOffset) * scaleFactor, (279.89418 + xOffset) * scaleFactor, (361.37456 + yOffset) * scaleFactor, (280.03194 + xOffset) * scaleFactor, (361.37456 + yOffset) * scaleFactor);
context.bezierCurveTo((280.08294 + xOffset) * scaleFactor, (361.37456 + yOffset) * scaleFactor, (278.91969 + xOffset) * scaleFactor, (363.38986 + yOffset) * scaleFactor, (277.45542 + xOffset) * scaleFactor, (365.84396 + yOffset) * scaleFactor);
context.bezierCurveTo((264.80238 + xOffset) * scaleFactor, (387.03776 + yOffset) * scaleFactor, (253.97585 + xOffset) * scaleFactor, (412.00196 + yOffset) * scaleFactor, (248.07791 + xOffset) * scaleFactor, (433.61426 + yOffset) * scaleFactor);
context.bezierCurveTo((238.60343 + xOffset) * scaleFactor, (468.29276 + yOffset) * scaleFactor, (239.74628 + xOffset) * scaleFactor, (498.05296 + yOffset) * scaleFactor, (251.42484 + xOffset) * scaleFactor, (521.12936 + yOffset) * scaleFactor);
context.bezierCurveTo((259.48095 + xOffset) * scaleFactor, (537.02736 + yOffset) * scaleFactor, (273.29215 + xOffset) * scaleFactor, (550.79776 + yOffset) * scaleFactor, (288.82274 + xOffset) * scaleFactor, (558.4099600000001 + yOffset) * scaleFactor);
context.bezierCurveTo((316.01148 + xOffset) * scaleFactor, (571.7313600000001 + yOffset) * scaleFactor, (355.81754 + xOffset) * scaleFactor, (572.8334600000001 + yOffset) * scaleFactor, (404.42973 + xOffset) * scaleFactor, (561.6344600000001 + yOffset) * scaleFactor);
context.bezierCurveTo((407.77667 + xOffset) * scaleFactor, (560.8589600000001 + yOffset) * scaleFactor, (573.62336 + xOffset) * scaleFactor, (516.8334600000001 + yOffset) * scaleFactor, (772.9802099999999 + xOffset) * scaleFactor, (463.7978600000001 + yOffset) * scaleFactor);
context.bezierCurveTo((972.3370699999999 + xOffset) * scaleFactor, (410.75706000000014 + yOffset) * scaleFactor, (1135.4746 + xOffset) * scaleFactor, (367.39496000000014 + yOffset) * scaleFactor, (1135.5001 + xOffset) * scaleFactor, (367.4306600000001 + yOffset) * scaleFactor);
context.bezierCurveTo((1135.5561 + xOffset) * scaleFactor, (367.4766600000001 + yOffset) * scaleFactor, (672.33751 + xOffset) * scaleFactor, (565.6905600000001 + yOffset) * scaleFactor, (431.87356 + xOffset) * scaleFactor, (668.5220600000001 + yOffset) * scaleFactor);
context.bezierCurveTo((393.79197999999997 + xOffset) * scaleFactor, (684.8026600000002 + yOffset) * scaleFactor, (383.60835 + xOffset) * scaleFactor, (688.9148600000001 + yOffset) * scaleFactor, (365.70529 + xOffset) * scaleFactor, (695.2005600000001 + yOffset) * scaleFactor);
context.bezierCurveTo((319.94004 + xOffset) * scaleFactor, (711.2719600000001 + yOffset) * scaleFactor, (278.94521 + xOffset) * scaleFactor, (718.94036 + yOffset) * scaleFactor, (245.8075 + xOffset) * scaleFactor, (717.6240600000001 + yOffset) * scaleFactor);
context.closePath();
context.lineWidth = 0;
context.strokeStyle = '#3d2c32';
context.fillStyle = '#3d2c32';
context.fill();
context.stroke();



