
var countUpDate = new Date("January 17, 2021 21:00:00").getTime();
var murderDate = new Date("February 16, 2024 09:17:00").getTime();
var oneSecond = 1000;
var oneMinute = oneSecond * 60;
var oneHour = oneMinute * 60;
var oneDay = oneHour * 24;

function updateTimer() {
  var distance = murderDate - countUpDate;
  var time = {
    days: Math.floor(distance / oneDay),
    hours: Math.floor((distance % oneDay) / oneHour),
    minutes: Math.floor((distance % oneHour) / oneMinute),
    seconds: Math.floor((distance % oneMinute) / oneSecond)
  }

  time.hours = time.hours < 10 ? "0" + time.hours : time.hours;
  time.minutes = time.minutes < 10 ? "0" + time.minutes : time.minutes;
  time.seconds = time.seconds < 10 ? "0" + time.seconds : time.seconds;


  console.log(countUpDate);

  document.getElementById("timer").innerHTML = `${time.days} days ${time.hours}:${time.minutes}:${time.seconds}`;
}

updateTimer();