clock();

function clock() {
  const date = new Date();

  const hours = ((date.getHours() + 11) % 12) + 1;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const hour = hours * 30;
  const minute = minutes * 6;
  const second = seconds * 6;

  const hourHand = document.querySelector(".hour");
  const minuteHand = document.querySelector(".minute");
  const secondHand = document.querySelector(".second");

  hourHand.style.transform = `rotate(${hour}deg)`;
  minuteHand.style.transform = `rotate(${minute}deg)`;
  second == 0
    ? secondHand.classList.add("hide-transition")
    : secondHand.classList.remove("hide-transition");
  secondHand.style.transform = `rotate(${second}deg)`;

  // dynamic shadow
  let hourOffsetSign = hour > 135 && hour < 315 ? "-" : "";
  let minuteOffsetSign = minute > 135 && minute < 315 ? "-" : "";
  let secondOffsetSign = second > 135 && second < 315 ? "-" : "";

  hourHand.style.boxShadow = `${hourOffsetSign}6px ${hourOffsetSign}6px 6px #b8b9be`;
  minuteHand.style.boxShadow = `${minuteOffsetSign}6px ${minuteOffsetSign}6px 6px #b8b9be`;
  secondHand.style.boxShadow = `${secondOffsetSign}6px ${secondOffsetSign}6px 6px #b8b9be`;
  
  //V2
  const weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  document.getElementById("clock-digi").innerHTML =
    weekday[date.getDay()] +
    ", " +
    makeDouble(date.getDate()) +
    "/" +
    makeDouble(date.getMonth()) +
    " - " +
    makeDouble(hours) +
    ":" +
    makeDouble(minutes);

  document.getElementById("clock-sec").innerHTML = makeDouble(seconds);
}

setInterval(clock, 1000);

function goFullscreen() {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.webkitRequestFullscreen) {
    /* Safari */
    document.documentElement.webkitRequestFullscreen();
  } else if (document.documentElement.msRequestFullscreen) {
    /* IE11 */
    document.documentElement.msRequestFullscreen();
  }
}

function makeDouble(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
