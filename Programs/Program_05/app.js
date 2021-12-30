let inputField = document.getElementById("date-field");
let yearEl = document.getElementById("year");

const checkYear = () => {
    let year = Number(inputField.value.slice(0, 4));
    // console.log(year);

    let leapYear = (year % 4 === 0) ? (`${year} is a leap year!`) : (`${year} is not a leap year!`);
    console.log(leapYear);
    yearEl.innerHTML = leapYear;
}