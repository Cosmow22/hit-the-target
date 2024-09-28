function  targetClickHandler(target) {
    target.style.left = getRandomX()
    target.style.top = getRandomY()
    updateCounter()
}

function updateCounter() {
    targetsHitCounter ++;
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
    let y = Math.floor(Math.random() * (maxHeight-minHeight)  +  minHeight);
    y += "px"
    return y;
}

function format(secondsToWait) {
    let min = Math.floor(secondsToWait/60).toString().padStart(2, '0');
    let sec = (secondsToWait % 60).toString().padStart(2, '0');
    return min+":"+sec;
    }

function showStats() {
    time.innerHTML = "targets in " + initialTimerValue;
    speed.innerHTML = targetsHitCounter / (initialSecondsToWait/60);
    if (totalClicks) {
        accuracy.innerHTML = Math.round((targetsHitCounter/totalClicks*100)) + "%";
    } else {
        accuracy.innerHTML = "0%"
    }
    modal.classList.add("active");
    overlay.classList.add("active");
}
let targets = document.getElementsByClassName("target");
let targetsContainer = document.getElementById("targets-container");
let timer = document.getElementById("timer");
let secondsToWait = 10; // between 10 and 619
var targetsHitCounter = 0;
var totalClicks = 0;

const initialSecondsToWait = secondsToWait;
const initialTimerValue = format(secondsToWait);
const time = document.getElementById("time")
const speed = document.getElementById("speed")
const accuracy = document.getElementById("accuracy")
const targetsHitCounterTags = document.getElementsByClassName("targets-counter");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const retryButton = document.getElementById("retry-button");
const targetSize = 50;
const minHeight = document.getElementById("row").scrollHeight
const maxWidth = targetsContainer.scrollWidth - targetSize;
const maxHeight = targetsContainer.scrollHeight - targetSize;

timer.innerHTML = initialTimerValue;
for (let target of targets) {
    target.style.left = getRandomX()
    target.style.top = getRandomY()
    target.addEventListener("click", () => targetClickHandler(target))
}

let timerInterval = setInterval(() => {
        secondsToWait--
        timer.innerHTML = format(secondsToWait)
        if (secondsToWait === 0) {
            clearInterval(timerInterval)
            showStats()
        }
    }, 1000);

targetsContainer.addEventListener("click", () => {
    totalClicks ++;
    }
);
