import { stopGame } from "./js/game.js"

export const alarmClock = document.getElementById("timer");

export function format(secondsToWait) {
    let min = Math.floor(secondsToWait / 60).toString().padStart(2, '0');
    let sec = (secondsToWait % 60).toString().padStart(2, '0');
    return min + ":" + sec;
}

export function setTimer(timespan) {0
    let timer = setInterval(() => {
        timespan--
        alarmClock.innerHTML = format(timespan)
        if (timespan === 0) {
            clearInterval(timer)
            stopGame()
        }
    }, 1000);
}
