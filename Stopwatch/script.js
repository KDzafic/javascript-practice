const time = document.getElementById('time');
let timerId = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;



function start() {
    if(!isRunning) {
        startTime = Date.now() - elapsedTime;
        timerId = setInterval(update, 10);
        isRunning = true
        document.getElementById('start').style.display = 'none';
        document.getElementById('stop').style.display = 'inline';
        document.getElementById('reset').style.display = 'inline';
    }
}

function stop() {
    if(isRunning) {
        clearInterval(timerId);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
        document.getElementById('start').style.display = 'inline';
    }
}

function reset() {
    clearInterval(timerId);
    timerId = null;
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    document.getElementById('start').style.display = 'inline';
    document.getElementById('stop').style.display = 'none';
    document.getElementById('reset').style.display = 'none';
    time.textContent = "00:00:00:00";
}

function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let miliseconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, 0);
    minutes = String(minutes).padStart(2, 0);
    seconds = String(seconds).padStart(2, 0);
    miliseconds = String(miliseconds).padStart(2, 0);

    time.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`
}