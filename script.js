const colorIdentifiersForPeople = {
    "Abhinav Manchanda": "#990011FF",
    "Renuka Tamboli": "#76528BFF",
    "Omkar Birade": "#006B38FF",
    "Interleap Team": "#AFD275FF"
}

const ACTIVE_NOTIFICATION_BACKGROUND_COLOR_IN_RGB_STRING = "rgb(26, 115, 232)"

const hasActiveNotification = (node) => window.getComputedStyle(node).backgroundColor === ACTIVE_NOTIFICATION_BACKGROUND_COLOR_IN_RGB_STRING

const observer = new MutationObserver(() => {
    const [container] = document.getElementsByClassName("dPuQff")
    if (!container) return
    const color = colorIdentifiersForPeople[container.innerText]
    if (!color) return
    const { parentElement } = container
    if (!hasActiveNotification(parentElement))
        parentElement.style.backgroundColor = color
});
observer.observe(document.body, { subtree: true, childList: true });