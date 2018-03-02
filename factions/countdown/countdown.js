/**
* @Author DJBiokinetix
* @Contribuitors NotZepeda
*/

var SOTWorldTime = new Date("3 25, 2018 15:00:00").getTime(); //Use esta seccion para el Start Of The World
var EOTWorldTime = new Date("3 24, 2018 15:00:00").getTime(); //Use esta seccion para el End Of The World

var x = setInterval(function() {

  var now = new Date().getTime();
  var sotwvar = SOTWorldTime - now;
  var eotwvar = EOTWorldTime - now;

  var s_days = Math.floor(sotwvar / (1000 * 60 * 60 * 24));
  var s_hours = Math.floor((sotwvar % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var s_minutes = Math.floor((sotwvar % (1000 * 60 * 60)) / (1000 * 60));
  var s_seconds = Math.floor((sotwvar % (1000 * 60)) / 1000);

  var e_days = Math.floor(eotwvar / (1000 * 60 * 60 * 24));
  var e_hours = Math.floor((eotwvar % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var e_minutes = Math.floor((eotwvar % (1000 * 60 * 60)) / (1000 * 60));
  var e_seconds = Math.floor((eotwvar % (1000 * 60)) / 1000);

  document.getElementById("sotw").style.color = "red";
  document.getElementById("eotw").style.color = "blue";
  document.getElementById("sotw").innerHTML=s_days+" days | "+s_hours+" hours | "+s_minutes+" minutes | "+s_seconds+" seconds ";
  document.getElementById("eotw").innerHTML=e_days+" days | "+e_hours+" hours | "+e_minutes+" minutes | "+e_seconds+" seconds ";
  if (sotwvar < 0) {

    clearInterval(x);
    document.getElementById("sotw").innerHTML="SOTW AND CUBECOREHCF ALREADY STARTED | Join kohi.life to play!";
  }

  if (eotwvar < 0) {
    clearInterval(x);
    document.getElementById("eotw").innerHTML="EOTW ALREADY STARTED! | Join kohi.life to play! ";
  }

}, 1000);
