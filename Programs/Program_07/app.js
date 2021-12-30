let inputField = document.getElementById("input-field");
let element = document.getElementById("value-matched");

const numberMatched = () => {
    let randomNum = Math.floor(Math.random() * 10) + 1;
    // console.log(randomNum);

    let guessNumber = Number(inputField.value);
    // console.log(guessNumsber);

    let result = (guessNumber === randomNum) ? ("Good Work!") : ("Not Matched!");
    console.log(result);
    element.innerHTML = result;
}