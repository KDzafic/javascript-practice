let counter = 0;


document.getElementById("increase").addEventListener('click', function() {
    counter += 1;
    document.getElementById("counter").textContent = counter;
});

document.getElementById("reset").addEventListener('click',function () {
    counter = 0;
    document.getElementById("counter").textContent = counter;
});

document.getElementById("decrease").addEventListener('click',function () {
    counter -= 1;
    document.getElementById("counter").textContent = counter;
});