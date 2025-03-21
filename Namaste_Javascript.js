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

//  Episode 7 : The Scope Chain, Scope & LexicalEnvironment
/*
function a() {
  console.log(b);
}
var b = 10;
a();
*/

/*
function a() {
  c();
  function c() {
    console.log(b);
  }
}
var b = 10;
a();
*/

/*
function a() {
  c();
  function c() {
    var b = 100;
    console.log(b);
  }
}

var b = 10;
a();
*/

/*
function a() {
  var b = 10;
  c();
  function c() {
    console.log(b);
  }
}
a();
console.log(b);
*/

// Episode 8 : let & const in JS, Temporal Dead Zone

// console.log(a);
// console.log(b);
// let a = 10;
// console.log(a);
// var b = 15;
// console.log(global.a);
// console.log(b);

// let a = 10;
// var a = 100;

// let a;
// a = 10;
// console.log(a);

// const b = 20;
// b = 100;
// console.log(b);

// Episode 9 : Block Scope & Shadowing in JS

// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(b);
//   console.log(c);
// }
// console.log(a);

// var a = 100;
// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// console.log(a);

// let b = 100;
// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(b);
// }
// console.log(b);

// const c = 100;
// function x() {
//   const c = 10;
//   console.log(c);
//   // 10
// }
// x();
// console.log(c);
// // 100

//

// let a = 20;
// function x() {
//   var a = 30;
//   console.log(a);
// }
// x();
// console.log(a);

// Episode 10 : Closures in JS

//
// function z() {
//   var b = 900;
//   function x() {
//     var a = 7;
//     function y() {
//       console.log(b, a);
//     }
//     y();
//   }
//   x();
// }
// z();

// Episode 11 : setTimeout + Closures InterviewQuestion

//

//

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     function close(i) {
//       setTimeout(() => {
//         console.log(i);
//       }, i * 1000);
//     }
//     close(i);
//   }
//   console.log("Namaste Sandeep");
// }
// x();

//  Episode 12 : Famous Interview Questions ft. Closures
