let element = document.getElementById("message");

let today = new Date();
// console.log(today);

let fourteenAug_2021 = new Date("August 14, 2022");
// console.log(fourteenAug_2021);

// Note: Converting both times in mili seconds...!
const todayInMiliSecs = today.getTime();
const fourteenAug_2021InMiliSecs = fourteenAug_2021.getTime();
// console.log(todayInMiliSecs);
// console.log(fourteenAug_2021InMiliSecs);

// Note: Subtracting 24 aug 2022 - today in miliseconds...!
const remainingTimeInMiliSecs = fourteenAug_2021InMiliSecs - todayInMiliSecs;
// console.log(remainingTimeInMiliSecs);

let daysFormula = remainingTimeInMiliSecs / (1000 * 60 * 60 * 24);
daysFormula = Math.floor(daysFormula);
let result = `${daysFormula} days left in 14 August 2021`;
console.log(result);
element.innerHTML = result;