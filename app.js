const deadline = new Date(Date.UTC(2018, 4, 12, 8)).getTime();

const count = setInterval(function() {
  const now = Date.now() ;
  const diff = deadline - now;

  // https://www.w3schools.com/howto/howto_js_countdown.asp
  const days = Math.floor(diff / 1000 / 60 / 60 / 24);

  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + 3; // Soma 3 para compensar o fuso
  hours = hours < 10 ? `0${hours}` : hours;

  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  let seconds = Math.floor((diff % (1000 * 60)) / 1000);
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  document.querySelector("#days").innerHTML = days < 0 ? 0 : days;
  document.querySelector("#hours").innerHTML = hours < 0 ? 0 : hours;
  document.querySelector("#minutes").innerHTML = minutes < 0 ? 0 : minutes;
  document.querySelector("#seconds").innerHTML = seconds < 0 ? 0 : seconds;
}, 1000);
