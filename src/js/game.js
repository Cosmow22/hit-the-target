import { showModal } from "./js/responsive";
import { animateStats } from "./js/odometer.js"

const timerDurationStatDiv = document.getElementById("timer-duration-stat")

function retry() {
    modal.classList.remove("active");
    overlay.classList.remove("active");
    modal.classList.add("disabled")
    overlay.classList.add("disabled")
    setTimeout(() => {
        reset()
        setTimer()
    }, 200) // 200ms is the transition duration

    }

function reset() {
    resetOdometer(targetCounterStatOdometer)
    resetOdometer(targetCounterOdometer)
    resetOdometer(speedStatOdometer)
    resetOdometer(accuracyStatOdometer)
    secondsToWait = initialSecondsToWait; // between 10 and 619
    targetsHitCounter = 0;
    totalClicks = 0;
    timer.innerHTML = initialTimerValue;
}

export function stopGame() {
    showModal()
    timerDurationStatDiv.innerHTML = "targets in " + initialTimerValue;
    animateStats()
}