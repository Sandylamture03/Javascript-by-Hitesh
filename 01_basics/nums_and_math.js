const score = 400;
//console.log(score);

let balance = new Number(100);
//console.log(balance);

//console.log(balance.toString());
//console.log(balance.toString().length);
//console.log(balance.toFixed(2));

let otherNumber = 123.8966;
console.log(otherNumber.toPrecision(3));

let hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN"));

//***************************************************************************************************

// // Example of Math methods

// // Conversion to integer
// console.log(Math.abs(-4)); // 4 (absolute value)
// console.log(Math.round(4.6)); // 5 (nearest integer)
// console.log(Math.ceil(4.2)); // 5 (next integer)
// console.log(Math.floor(4.9)); // 4 (previous integer)

// // Minimum and Maximum
// console.log(Math.min(2, 5, 1, 9)); // 1
// console.log(Math.max(2, 5, 1, 9)); // 9

// // Power and Square Root
// console.log(Math.pow(2, 3)); // 8 (2 raised to the power of 3)
// console.log(Math.sqrt(25)); // 5 (square root)

// // Random Number
// console.log(Math.random()); // Random number between 0 and 1
// console.log(Math.floor(Math.random() * 10) + 1); // Random integer between 1 and 10

// // Trigonometric Functions
// console.log(Math.sin((90 * Math.PI) / 180)); // 1 (sine of 90 degrees)
// console.log(Math.cos(0)); // 1 (cosine of 0 degrees)
// console.log(Math.tan((45 * Math.PI) / 180)); // 1 (tangent of 45 degrees)

// // Logarithm
// console.log(Math.log(10)); // Natural logarithm
// console.log(Math.log10(100)); // Base 10 logarithm

// // Pi (π)
// console.log(Math.PI); // 3.141592653589793
// console.log(Math.random() * 10) + 1;
// console.log(Math.floor(Math.random() * 10) + 1);

// console.log(Math.floor(Math.random() * 10) + 1);

let min = 10;
let max = 20;

console.log(Math.floor(Math.random() * (max - min) + 1) + min);
