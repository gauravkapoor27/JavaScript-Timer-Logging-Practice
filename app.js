const logBtn = document.querySelector(".log-button");
const logBox = document.querySelector(".log-box");
let logCount = 1;
var timeBegan = new Date();

let msTime = 0;

function stopWatch() {
  msTime++;

  let currentTime = new Date();
  timeElapsed = new Date(currentTime - timeBegan);
  hour = timeElapsed.getUTCHours();
  min = timeElapsed.getUTCMinutes();
  sec = timeElapsed.getUTCSeconds();
  ms = timeElapsed.getUTCMilliseconds();

  document.getElementsByClassName("time-display")[0].innerText =
    (hour > 9 ? hour : "0" + hour) +
    ":" +
    (min > 9 ? min : "0" + min) +
    ":" +
    (sec > 9 ? sec : "0" + sec) +
    "." +
    (ms > 99 ? ms : ms > 9 ? "0" + ms : "00" + ms);
}
// window.setInterval(stopWatch, 10);

logBtn.addEventListener("click", function () {
  element = document.createElement("div");
  element.classList.add("log-time");

  let currentTime = new Date();
  timeElapsed = new Date(currentTime - timeBegan);
  hour = timeElapsed.getUTCHours();
  min = timeElapsed.getUTCMinutes();
  sec = timeElapsed.getUTCSeconds();
  ms = timeElapsed.getUTCMilliseconds();
  element.innerText =
    logCount.toString() +
    ": " +
    (hour > 9 ? hour : "0" + hour) +
    ":" +
    (min > 9 ? min : "0" + min) +
    ":" +
    (sec > 9 ? sec : "0" + sec) +
    "." +
    (ms > 99 ? ms : ms > 9 ? "0" + ms : "00" + ms);
  logBox.prepend(element);
  logCount++;
});
