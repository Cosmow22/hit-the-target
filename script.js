function targetClickHandler(target) {
    target.style.left = getRandomX()
    target.style.top = getRandomY()
    updateCounter()
}

function updateCounter() {
    targetsHitCounter++;
    for (let tag of targetsHitCounterTags) {
        tag.innerHTML = targetsHitCounter;
    }
}

function getRandomX() {
    let x = Math.floor(Math.random() * maxWidth);
    x += "px"
    return x
}

function getRandomY() {
    let y = Math.floor(Math.random() * (maxHeight - minHeight) + minHeight);
    y += "px"
    return y;
}

function format(secondsToWait) {
    let min = Math.floor(secondsToWait / 60).toString().padStart(2, '0');
    let sec = (secondsToWait % 60).toString().padStart(2, '0');
    return min + ":" + sec;
}

function showStats() {
    timerDurationStatDiv.innerHTML = "targets in " + initialTimerValue;
    speedStatDiv.innerHTML = targetsHitCounter / (initialSecondsToWait / 60);
    if (totalClicks) {
        accuracyStatDiv.innerHTML = Math.round((targetsHitCounter / totalClicks * 100)) + "%";
    } else {
        accuracyStatDiv.innerHTML = "0%"
    }
    modal.classList.remove("disabled")
    overlay.classList.remove("disabled")
    modal.classList.add("active");
    overlay.classList.add("active");
}

function setTimerInterval() {
    let timerInterval = setInterval(() => {
        secondsToWait--
        timer.innerHTML = format(secondsToWait)
        if (secondsToWait === 0) {
            clearInterval(timerInterval)
            showStats()
        }
    }, 1000);
}

function retry() {
    modal.classList.remove("active");
    overlay.classList.remove("active");
    modal.classList.add("disabled")
    overlay.classList.add("disabled")
    reset()
    setTimerInterval()
}

function reset() {
    secondsToWait = initialSecondsToWait; // between 10 and 619
    targetsHitCounter = 0;
    totalClicks = 0;
    timer.innerHTML = initialTimerValue;
}

var secondsToWait = 5; // between 10 and 619
var targetsHitCounter = 0;
var totalClicks = 0;


// get elements
const targets = document.getElementsByClassName("target");
const targetsContainer = document.getElementById("targets-container");
const timer = document.getElementById("timer");
const timerDurationStatDiv = document.getElementById("timer-duration-stat")
const speedStatDiv = document.getElementById("speed-stat-div")
const accuracyStatDiv = document.getElementById("accuracy-stat-div")
const targetsHitCounterTags = document.getElementsByClassName("targets-counter");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const retryButton = document.getElementById("retry-button");

const targetSize = 50;
const minHeight = document.getElementById("row").scrollHeight
const maxWidth = targetsContainer.scrollWidth - targetSize;
const maxHeight = targetsContainer.scrollHeight - targetSize;
const initialTimerValue = format(secondsToWait);
const initialSecondsToWait = secondsToWait;

timer.innerHTML = initialTimerValue;
for (let target of targets) {
    target.style.left = getRandomX()
    target.style.top = getRandomY()
    target.addEventListener("click", () => targetClickHandler(target))
}

setTimerInterval()

targetsContainer.addEventListener("click", () => {
    totalClicks++;
}
);
