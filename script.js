function  clickHandler(target) {
    console.log(target.style.left, target.style.top)
    target.style.left = getRandomX()
    target.style.top = getRandomY()
}

function getRandomX() {
    let x = Math.floor(Math.random() * maxWidth);
    x = `${x}px`
    return x
}

function getRandomY() {
    let y = Math.floor(Math.random() * maxHeight);
    y = `${y}px`
    return y
}


console.log(
    document.documentElement.scrollWidth, 
    document.documentElement.scrollHeight
)


let targets = document.getElementsByClassName("target");

const targetSize =50// Math.floor(document.documentElement.scrollWidth / 15);
const maxWidth = document.documentElement.scrollWidth - targetSize;
const maxHeight = document.documentElement.scrollHeight - targetSize;

console.log(targets.style)
for (let i = 0; i < targets.length; i++) {
    let target = targets.item(i)
    target.style.left = getRandomX()
    target.style.top = getRandomY()
    target.style.width = `${targetSize}px`
    target.style.height = `${targetSize}px`
    target.addEventListener("click", () => clickHandler(target))
}

document.addEventListener("click", function(event) {
    console.log(event.clientX, event.clientY);
});