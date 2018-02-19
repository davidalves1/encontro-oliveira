const deadline = new Date(Date.UTC(2018, 4, 12, 8)).getTime();

const count = setInterval(function() {
  const now = Date.now();
  const diff = deadline - now;

  // https://www.w3schools.com/howto/howto_js_countdown.asp
  const days = Math.floor(diff / 1000 / 60 / 60 / 24);
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  hours = hours < 10 ? `0${hours}` : hours;

  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  let seconds = Math.floor((diff % (1000 * 60)) / 1000);
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  document.querySelector("#days").innerHTML = days;
  document.querySelector("#hours").innerHTML = hours;
  document.querySelector("#minutes").innerHTML = minutes;
  document.querySelector("#seconds").innerHTML = seconds;
}, 1000);
