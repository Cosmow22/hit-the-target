import { secondsToWait, targetsContainer } from "./consts";


const targetCounterStatDiv = document.getElementById("target-counter-stat-div")
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

const odometers = [
    targetCounterOdometer, 
    targetCounterStatOdometer, 
    speedStatOdometer, 
    accuracyStatOdometer
];

export function resetOdometers() {
    odometers.forEach((odometer) => {
        odometer.value = 0;
        odometer.render();
    })
}

export function animateStats(totalClicks) {
    targetCounterStatOdometer.update(targetCounterOdometer.value);
    speedStatOdometer.update(targetCounterOdometer.value / (secondsToWait / 60));
    accuracyStatOdometer.update(Math.round((targetCounterOdometer.value / totalClicks * 100)));
}

export function updateCounter() {
    targetCounterOdometer.update(targetCounterOdometer.value + 1)
}

/* This function is currently not used

function change(className, odometerDuration) {
    odometerDuration += "s";
    console.log(odometerDuration)
    document.querySelectorAll(className).forEach((e) => {
        e.style.setProperty('--odometer-duration', odometerDuration)
        console.log(e.style)
    });
}
*/
