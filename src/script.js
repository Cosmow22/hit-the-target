function targetClickHandler(target) {
    target.style.left = getRandomX()
    target.style.top = getRandomY()
    updateCounter()
}

function updateCounter() {
    targetsHitCounter++;
    targetCounterOdometer.update(targetsHitCounter)
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
    modal.classList.remove("disabled")
    overlay.classList.remove("disabled")
    modal.classList.add("active");
    overlay.classList.add("active");
    timerDurationStatDiv.innerHTML = "targets in " + initialTimerValue;
    console.log(targetCounterStatOdometer.value)
    targetCounterStatOdometer.update(targetsHitCounter);
    speedStatOdometer.update(targetsHitCounter / (initialSecondsToWait / 60));
    if (totalClicks) {
        accuracyStatOdometer.update(Math.round((targetsHitCounter / totalClicks * 100)));
    };
    
}

function setTimer() {
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

function resetOdometer(od, value=0) {
    od.value = value;
    od.render()
}

function change(className, odometerDuration) {
    odometerDuration += "s";
    console.log(odometerDuration)
    document.querySelectorAll(className).forEach((e) => {
        e.style.setProperty('--odometer-duration', odometerDuration)
        console.log(e.style)
    });
}

var secondsToWait = 75; // between 10 and 619
var targetsHitCounter = 0;
var totalClicks = 0;


// main page elements
const targets = document.getElementsByClassName("target");
const targetsContainer = document.getElementById("targets-container");
const timer = document.getElementById("timer");
// modal elements
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const retryButton = document.getElementById("retry-button");
    // stat divs
const targetCounterStatDiv = document.getElementById("target-counter-stat-div")
const timerDurationStatDiv = document.getElementById("timer-duration-stat")
const speedStatDiv = document.getElementById("speed-stat-div")
const accuracyStatDiv = document.getElementById("accuracy-stat-div")


var targetCounterOdometer = new Odometer({
    el: document.querySelector("#odometer-target-counter"),
    value: 0,
});

var targetCounterStatOdometer = new Odometer({
    el: targetCounterStatDiv,
    value: 0,
}); 

var speedStatOdometer = new Odometer({
    el: speedStatDiv,
    value: 0,
});

var accuracyStatOdometer = new Odometer({
    el: accuracyStatDiv,
    value: 0,
});

const targetSize = 100;
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

setTimer()

targetsContainer.addEventListener("click", () => {
    totalClicks++;
}
);
