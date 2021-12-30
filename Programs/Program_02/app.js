let dateEl = document.getElementById("date");

let currentDate = new Date();
let result = currentDate.toLocaleDateString('en-PK');
console.log(result);
dateEl.innerHTML = result;