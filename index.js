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
}

setInterval(clock, 1000);
