clock();

function clock() {
  const date = new Date();

  const hours = ((date.getHours() + 11) % 12) + 1;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const hour = hours * 30;
  const minute = minutes * 6;
  const second = seconds * 6;

  document.querySelector(".hour").style.transform = `rotate(${hour}deg)`;
  document.querySelector(".minute").style.transform = `rotate(${minute}deg)`;
  const secondHand = document.querySelector(".second");
  second == 0
    ? secondHand.classList.add("hide-transition")
    : secondHand.classList.remove("hide-transition");
  secondHand.style.transform = `rotate(${second}deg)`;
}

setInterval(clock, 1000);
