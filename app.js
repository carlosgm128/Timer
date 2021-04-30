//objects
const horaSpan = document.querySelector(".hora");
const playBtn = document.querySelector("#btn__play");
const stopBtn = document.querySelector("#btn__stop");
//data
let minutes = 25;
let seconds = 0;
let timerId = 0;
let playing = false;
//event Listeners
playBtn.addEventListener("click", playTimer);
stopBtn.addEventListener("click", stopTimer);
//functions
function playTimer() {
  if (!playing) {
    timerId = setInterval(() => {
      if (seconds > 0) {
        seconds--;
      }
      if (seconds === 0) {
        minutes--;
        seconds = 59;
      }
      horaSpan.innerHTML = `${minutes}:${seconds}`;
    }, 1000);
    playing = !playing;
    console.log({ timerId, playing });
  }
  playing || alert("its already playing");
}
function stopTimer() {
  //alert("Timer stoped");
  if (horaSpan.innerHTML !== "25:00") {
    if (playing === true && timerId !== 0) {
      clearInterval(timerId);
      timerId == 0;
      stopBtn.innerHTML = "Stop";
      playing = !playing;
      console.log({ timerId, playing }, "if its true");
      return 0;
    }
    if ((playing === false && minutes !== 25) || seconds !== 59) {
      console.log({ timerId, playing }, "if its false");
      horaSpan.innerHTML = "25:00";
      minutes = 25;
      seconds = 0;
      stopBtn.innerHTML = "Pause";
      playing = !playing;
      return 0;
    }
  }
}
