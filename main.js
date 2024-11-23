import { alarmClock, format, setTimer } from "./js/timer.js"
import { updateCounter } from "./js/odometer.js"
import { placeRandomly } from "./js/targets.js"
import { setHoverEffectToRetryButton } from "./js/responsive.js";
import { retry } from "./js/game.js"
import { secondsToWait } from "./js/consts.js"




// main page elements
const targets = document.getElementsByClassName("target");

for (let target of targets) {
    placeRandomly(null, target)
    target.addEventListener("click", updateCounter)
    target.addEventListener("click", (event) => { placeRandomly(event, target) }) 
}

setHoverEffectToRetryButton()

timer = setTimer(secondsToWait)
alarmClock.innerHTML = format(secondsToWait);
document.getElementById("retry-button").addEventListener("click", retry)
