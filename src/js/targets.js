import { 
    getRandomX, 
    getRandomY,
} from "./js/math.js"

export function placeRandomly(target) {
    target.style.left = getRandomX()
    target.style.top = getRandomY()
}
