let areaOfTriangleEl = document.getElementById("area-of-triangle");

let a = 5;
let b = 6;
let c = 7;

let p = (a + b + c) / 2;
// console.log(p);

let equation = p * ((p - a) * (p - b) * (p - c));
// console.log(equation);

let areaOfTriangle = Math.sqrt(equation);
console.log(areaOfTriangle);
areaOfTriangleEl.innerHTML = areaOfTriangle;