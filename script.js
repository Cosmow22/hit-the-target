function  targetClickHandler(target) {
    target.style.left = getRandomX()
    target.style.top = getRandomY()
    updateCounter()
}

function updateCounter() {
    counter ++;
    counterParagraph.innerHTML = counter;
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

let targets = document.getElementsByClassName("target");
let targetsContainer = document.getElementById("targets-container");
let rowContainer = document.getElementById("row")
let timer = document.getElementById("timer");
let secondsToWait = 3; // between 10 and 619
var counterParagraph = document.getElementById("counter");
var counter = 0;

const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const retryButton = document.getElementById("retry-button");
const targetSize = 50;
const minHeight = rowContainer.scrollHeight
const maxWidth = targetsContainer.scrollWidth - targetSize;
const maxHeight = targetsContainer.scrollHeight - targetSize;

timer.innerHTML = format(secondsToWait)
for (let target of targets) {
    target.style.left = getRandomX()
    target.style.top = getRandomY()
    target.addEventListener("click", () => targetClickHandler(target))
}

let timerInterval = setInterval(() => {
        secondsToWait--
        timer.innerHTML = format(secondsToWait)
        if (secondsToWait === 0) {
            console.log("Time's up !")
            clearInterval(timerInterval)
            modal.classList.add("active")
            overlay.classList.add("active")
        }
    }, 1000)
