var app = require("./module/classCalculatorES5.js");
var appES6 = require("./module/classCalculatorES6.js");


console.log('_____es5_____');

let myCalculator = new app.Calculator(100);
console.log(myCalculator.sum(1, 2, 3));
console.log(myCalculator.dif(10, 20));
console.log(myCalculator.div(2, 2));
console.log(myCalculator.mul(2, 2));

let myCalculator2 = new app.SqlCalc(100);
console.log(myCalculator2.sum(1, 2, 3));
console.log(myCalculator2.dif(10, 20));
console.log(myCalculator2.div(2, 2));
console.log(myCalculator2.mul(2, 2));

console.log('_____es6_____');

let myCalculatorES6 = new appES6.CalculatorES6(100);
console.log(myCalculatorES6.sum(1, 2, 3));
console.log(myCalculatorES6.dif(10, 20));
console.log(myCalculatorES6.div(2, 2));
console.log(myCalculatorES6.mul(2, 2));

let myCalculator2ES6 = new appES6.SqlCalcES6(100);
console.log(myCalculator2ES6.sum(1, 2, 3));
console.log(myCalculator2ES6.dif(10, 20));
console.log(myCalculator2ES6.div(2, 2));
console.log(myCalculator2ES6.mul(2, 2));