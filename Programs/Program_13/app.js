let inputField_1 = document.getElementById("value1");
let inputField_2 = document.getElementById("value2");
let element1 = document.getElementById("value1-el");

// Note: Function to sum values...!
const sumFunc = () => {
    let a = Number(inputField_1.value);
    let b = Number(inputField_2.value);

    let tripleEquation = a + b + a;
    let doubleEquation = a + b;

    if (a === b) {
        let result = `Triple Sum: ${tripleEquation}`;
        console.log(result);
        element1.innerHTML = result;
    }

    else {
        let result = `Sum: ${doubleEquation}`;
        console.log(result);
        element1.innerHTML = result;
    }
}