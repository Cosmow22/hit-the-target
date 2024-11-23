import { targetsContainer } from "./consts.js";

const targetSize = 100;
const minHeight = document.getElementById("row").scrollHeight;
const maxWidth = targetsContainer.scrollWidth - targetSize;
const maxHeight = targetsContainer.scrollHeight - targetSize;

export function getRandomX() {
    let x = Math.floor(Math.random() * maxWidth);
    x += "px"
    return x
}

export function getRandomY() {
    let y = Math.floor(Math.random() * (maxHeight - minHeight) + minHeight);
    y += "px"
    return y;
}
