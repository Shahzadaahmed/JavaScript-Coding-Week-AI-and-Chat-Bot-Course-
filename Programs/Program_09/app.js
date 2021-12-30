let inputField_1 = document.getElementById("value1");
let inputField_2 = document.getElementById("value2");
let element1 = document.getElementById("value1-el");
let element2 = document.getElementById("value2-el");

// Note: Function to multiply two values...!
const multiplyFunc = () => {
    let a = Number(inputField_1.value);
    let b = Number(inputField_2.value);
    let result = a * b;
    console.log(a);
    element1.innerHTML = `Multiplication result: ${result}`;
}
// Note: Function to divide two values...!
const divideFunc = () => {
    let a = Number(inputField_1.value);
    let b = Number(inputField_2.value);
    let result = a / b;
    console.log(result);
    element2.innerHTML = `Division result: ${result}`;
}