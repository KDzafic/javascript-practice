const displayResult = document.getElementById('result');
const value = document.getElementById('temperature-value');
const toCelsius = document.getElementById('radio-celsius')
const toFahrenheit = document.getElementById('radio-fahrenheit')
let temp;


function convert(){
    if (toFahrenheit.checked) {
        temp = Number(value.value);
        temp = (temp - 32) * (5/9);
        displayResult.textContent = temp.toFixed(1) + "°C";
    } else if(toCelsius.checked) {
        temp = Number(value.value);
        temp = temp * 9 / 5 + 32;
        displayResult.textContent = temp.toFixed(1) + "°F";
    } else {
        displayResult.textContent = "Select a unit";
    }
}