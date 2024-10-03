const retryButton = document.querySelector("#modal #retry-button");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");


function updateLinearGradient(x) {
    const width = retryButton.getBoundingClientRect().width
    const top = retryButton.getBoundingClientRect().left
    let x1 = (x-top)-width*30/100
    let x2 = (x-top)+width*30/100
    retryButton.style.setProperty(
        "background",
        `linear-gradient(
            to right, #E1581E ${x1}px, #ff9a00 ${x-top}px, #E1581E ${x2}px
            )`,
            "important" // remember to test without it
        )
    console.log(retryButton.style)
}


export function setHoverEffectToRetryButton() {
    retryButton.addEventListener(
        "mousemove", (event) => {
            setTimeout( () => {
                updateLinearGradient(event.clientX)
            }, 100)
        }
    )
    retryButton.addEventListener("mouseout", () => {
        retryButton.style.background = "",
        retryButton.style.setProperty("background-color: #E1581E;")
    })
}

export function showModal() {
    modal.classList.remove("disabled")
    overlay.classList.remove("disabled")
    modal.classList.add("active");
    overlay.classList.add("active");
}
