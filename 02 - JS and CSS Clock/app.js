const seconds = document.querySelector(".second-hand");
const mins = document.querySelector(".min-hand");
const hours = document.querySelector(".hour-hand");

const setDate = () => {
  const now = new Date();

  const secondsNow = now.getSeconds() * 6 + 90;
  seconds.style.transform = `rotate(${secondsNow}deg)`;

  const minutesNow = now.getMinutes() * 6 + 90;
  mins.style.transform = `rotate(${minutesNow}deg)`;

  const hoursNow = (now.getHours() % 12) * 30 + 90;
  hours.style.transform = `rotate(${hoursNow}deg)`;
};

setInterval(setDate, 1000);
