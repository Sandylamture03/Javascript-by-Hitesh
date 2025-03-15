/*
var n = 2;
function square(num) {
  var ans = num * num;
  return ans;
}

var square2 = square(n);
var square4 = square(4);
console.log(square2);   // 4
console.log(square4);   //  16
*/

// Hoisting in Javascript (variables & functions)

/*
getName();           // Namaste Javascript
console.log(x);     // undefined
var x = 7;
console.log(getName);   // f getName(){ console.log("Namaste JavaScript); }

function getName() {
  console.log("Namaste Javascript");
}
*/

/*
getName();            // Uncaught TypeError: getName is not a function
console.log(getName);
var getName = function () {
  console.log("Namaste javascript");
};

*/
// The code won't execute as the first line itself throws an TypeError.

//  Episode 4 : Functions and Variable Environments

/*
var x = 1;
a();
b(); // we are calling the functions before defining them. This will work properly, as seen in Hoisting
console.log(x);

function a() {
  var x = 10; // local scope because of separate execution context
  console.log(x);
}

function b() {
  var x = 100;
  console.log(x);
}
*/

//  Episode 5 : Shortest JS Program, window & thiskeyword

/*
var x = 10;
console.log(x); // 10
// 10
console.log(this.x); //  10
// 10
console.log(window.x); //  10
// 10

*/

//  Episode 6 : undefined vs not defined in JS

/*
console.log(x); // undefined
var x = 25;
console.log(x); // 25
console.log(a); // Uncaught ReferenceError: a is not defined
*/
/*
var a;
console.log(a);
a = 25;
console.log(a);
a = 30;
console.log(a);
var a = "sandy";
console.log(a);
*/

/*
const b = 465;
console.log(b);
b = 123;
console.log(b);
*/
