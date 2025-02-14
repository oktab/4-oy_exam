function updateClock() {
    let now = moment().utcOffset(5);
    
    document.getElementById("hours").textContent = now.format("HH");
    document.getElementById("minutes").textContent = now.format("mm");
    document.getElementById("seconds").textContent = now.format("ss");
    document.getElementById("ampm").textContent = now.format("A");
}

setInterval(updateClock, 1000);
updateClock();
