let userInput = document.getElementById("input-field");
let element1 = document.getElementById("value1-el");
let element2 = document.getElementById("value2-el");

const celsiusToF = () => {
    let celsiusTemp = Number(userInput.value);
    let f = celsiusTemp * 9 / 5 + 32;
    let msg = `${celsiusTemp} in Celsius is ${f} in Fahrenheit!`;
    console.log(msg);
    element1.innerHTML = msg;
}

const fahrenheitToC = () => {
    let fahrenheitTemp = Number(userInput.value);
    let c = (fahrenheitTemp - 32) * 5 / 9;
    let msg = `${fahrenheitTemp} in Fahrenheit is ${c} in Celsius!`;
    console.log(msg);
    element2.innerHTML = msg;
}