import { alarmClock, format, setTimer } from "./js/timer.js"
import { updateCounter } from "./js/odometer.js"
import { placeRandomly } from "./js/targets.js"
import { setHoverEffectToRetryButton } from "./js/responsive.js";


const secondsToWait = 15; // between 10 and 619
var totalClicks = 0;


// main page elements
const targets = document.getElementsByClassName("target");

for (let target of targets) {
    placeRandomly(target)
    target.addEventListener("click", updateCounter)
    target.addEventListener("click", placeRandomly)
}

setHoverEffectToRetryButton()

timer = setTimer(secondsToWait)
alarmClock.innerHTML = format(secondsToWait);

targetsContainer.addEventListener("click", () => {
    document.getElementById("targets-container").totalClicks++;
}
);

