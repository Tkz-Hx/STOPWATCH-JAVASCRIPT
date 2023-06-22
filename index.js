const timedisplay = document.querySelector("#timedisplay");
const startBtn = document.querySelector("#startBtn");
const PauseBtn = document.querySelector("#PauseBtn");
const resetBtn = document.querySelector("#resetBtn");

//===== CLOCK CODES ======== //
let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalID;
let hrs = 0;
let mins = 0;
let secs = 0;

startBtn.addEventListener("click", () => {
       if (paused) {
              paused = false;
              startTime = Date.now() - elapsedTime;
              intervalID = setInterval(updateTime, 75);
       }
});
PauseBtn.addEventListener("click", () => {
       if (!paused) {
              paused = true;
              elapsedTime = Date.now() - startTime;//--THIS SHOWS PASUED TIME--//
              clearInterval(intervalID);
       }
});
resetBtn.addEventListener("click", () => {
       paused = true;
       clearInterval(intervalID);
       startTime = 0;
       elapsedTime = 0;
       currentTime = 0;
       hrs = 0;
       mins = 0;
       secs = 0;
       timedisplay.textContent = "00:00:00";
});

function updateTime() {
       elapsedTime = Date.now() - startTime;

       secs = Math.floor((elapsedTime / 1000) % 60);
       mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
       hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

       // ====== ADDING 00 TO CLOCK USING TERNATORY IS THIS CODE ========= //
       secs = pad(secs);
       mins = pad(mins);
       hrs = pad(hrs);

       timedisplay.textContent = `${hrs}:${mins}:${secs}`;

       function pad(unit) {
              return (("0") + unit).length > 2 ? unit : "0" + unit;
       }
}