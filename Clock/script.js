
function updateClock() {
    const currentDate = new Date();
    const hours = currentDate.getHours().toString().padStart(2, 0);
    const minutes = currentDate.getMinutes().toString().padStart(2, 0);
    const seconds = currentDate.getSeconds().toString().padStart(2, 0);
    const day = currentDate.getDay();

    const time = `${hours}:${minutes}:${seconds}`;

    document.getElementById('time').textContent = time;

    setDay();
}

function setDay() {
    const currentDate = new Date();
    const day = currentDate.getDay();
    switch(day) {
        case 1:
            document.getElementById('monday').style.color = 'rgba(79, 79, 79, 0.957)';
            break;
        case 2:
            document.getElementById('tuesday').style.color = 'rgba(79, 79, 79, 0.957)';
            break;
        case 3:
            document.getElementById('wednesday').style.color = 'rgba(79, 79, 79, 0.957)';
            break;
        case 4:
            document.getElementById('thursday').style.color = 'rgba(79, 79, 79, 0.957)';
            break;
        case 5:
            document.getElementById('friday').style.color = 'rgba(79, 79, 79, 0.957)';
            break;
        case 6:
            document.getElementById('saturday').style.color = 'rgba(79, 79, 79, 0.957)';
            break;
        case 7:
            document.getElementById('sunday').style.color = 'rgba(79, 79, 79, 0.957)';
            break;
    }
}

updateClock();
setInterval(updateClock, 1000);