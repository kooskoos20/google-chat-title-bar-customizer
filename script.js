const colorIdentifiersForPeople = {
    "Abhinav Manchanda": "#990011FF",
    "Renuka Tamboli": "#76528BFF",
    "Omkar Birade": "#006B38FF",
    "Interleap Team": "#AFD275FF"
}

const observer = new MutationObserver(() => {
    const [container] = document.getElementsByClassName("dPuQff")
    if(!container) return
    const color = colorIdentifiersForPeople[container.innerText]
    if(!color) return
    container.style.backgroundColor = color
    observer.disconnect()
});
observer.observe(document.body, { subtree: true, childList: true });