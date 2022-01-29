const colorIdentifiersForPeople = {
    "Abhinav Manchanda": "#990011FF",
    "Renuka Tamboli": "#76528BFF",
    "Omkar Birade": "#006B38FF"
}

const observer = new MutationObserver(() => {
    const [container] = document.getElementsByClassName("dPuQff")
    if(!container) return
    const color = colorIdentifiersForPeople[container.innerText]
    if(!color) return
    const textElement = document.querySelector(`[data-name='${container.innerText}']`)
    textElement.style.fontSize = "20px"
    container.style.backgroundColor = color
    observer.disconnect()
});
observer.observe(document.body, { subtree: true, childList: true });