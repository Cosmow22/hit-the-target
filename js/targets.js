import { 
    getRandomX, 
    getRandomY,
} from "./math.js"

export function placeRandomly(event, target) {
    target.style.left = getRandomX()
    target.style.top = getRandomY()
}
