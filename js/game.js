import { showModal } from "./responsive";
import { animateStats, resetOdometers } from "./odometer.js"
import { setTimer, alarmClock, format } from "./timer.js";
import { secondsToWait, targetsContainer } from "./consts.js";

const timerDurationStatDiv = document.getElementById("timer-duration-stat")
var totalClicks = 0;

targetsContainer.addEventListener("click", () => { totalClicks++ });

export function retry() {
    modal.classList.remove("active");
    overlay.classList.remove("active");
    modal.classList.add("disabled")
    overlay.classList.add("disabled")
    setTimeout(() => {
        reset()
        setTimer(secondsToWait)
    }, 200) // 200ms is the transition duration

    }

function reset() {
    resetOdometers()
    totalClicks = 0;
    alarmClock.innerHTML = format(secondsToWait);
}

export function stopGame() {
    showModal()
    timerDurationStatDiv.innerHTML = "targets in " + secondsToWait + "s";
    console.log(totalClicks, "total clicks")
    animateStats(totalClicks)
}