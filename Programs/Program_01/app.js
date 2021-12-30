let dayEl = document.getElementById("day");
let timeEl = document.getElementById("time");

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let currentDate = new Date();
// console.log(currentDate);

let today = currentDate.getDay();
console.log(`Today is: ${days[today]}`);
dayEl.innerHTML = `Today is: ${days[today]}`;

let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();

let formatOf12Hours = hours % 12;
let amPm = hours >= 12 ? 'pm' : 'am';
let result = `Current time is: ${formatOf12Hours} ${amPm} : ${minutes} : ${seconds}`;
console.log(result);
timeEl.innerHTML = result;