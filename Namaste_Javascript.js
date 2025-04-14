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

// function outer() {
//   var a = 10;
//   function inner() {
//     console.log(a);
//   }
//   inner();
// }
// outer();

// function outer() {
//   function inner() {
//     console.log(a);
//   }
//   var a = 10;
//   inner();
// }
// outer();

// function outer() {
//   function inner() {
//     console.log(a);
//   }
//   let a = 10;
//   inner();
// }
// outer();

// function outer(str) {
//   let a = 10;
//   function inner() {
//     console.log(a, str);
//   }
//   return inner;
// }
// outer("hello pntu")();

//
// function counter() {
//   let count = 0;
//   return function increment() {
//     count++;
//     console.log(count);
//   };
// }
// let counter1 = counter();
// counter1();

// let counter2 = counter();
// counter2();

//
// var b = function (param1, param2) {
//   // labels/identifiers are parameters
//   console.log(param1, param2);
// };
// b("arg1", "arg2");
// //

// var b = function (param1) {
//   console.log(param1);
// };
// b(function () {});

// var b = function (param1) {
//   console.log(param1);
// };
// function xyz() {}
// b(xyz);

// var b = function (param1) {
//   return function () {};
// };
// console.log(b());

//  Episode 14 : Callback Functions in JS ft. EventListeners

// setTimeout(function () {
//   console.log("timer");
// }, 5000);

// function x(y) {
//   console.log("x");
//   y();
// }
// x(function y() {
//   console.log("y");
// });

// function printStr(str, cb) {
//   setTimeout(() => {
//     console.log(str);
//     cb();
//   }, Math.floor(Math.random() * 100) + 1);
// }
// function printAll() {
//   printStr("A", () => {
//     printStr("B", () => {
//       printStr("C", () => {});
//     });
//   });
// }
// printAll();
// function attachEventList() {
//   let count = 0;
//   document.getElementById("onClick").addEventListener("click", function xyz() {
//     console.log("button Clicked", ++count);
//   });
// }
// attachEventList();

//   Episode 15 : Asynchronous JavaScript & EVENT LOOPfrom scratch

// console.log("start");
// setTimeout(function cb() {
//   console.log("timer");
// }, 5000);
// console.log("end");

// console.log("start");
// document.getElementById("clicked").addEventListener("click", function cb() {
//   console.log("callback");
// });
// console.log("End");

// console.log("Start");
// setTimeout(function fbT() {
//   console.log("CB Timeout");
// }, 5000);

// fetch("https://api.netflix.com").then(function cbf() {
//   console.log("CB Netflix");
// });
// console.log("End");

//   Episode 17 : Trust issues with setTimeout()

// console.log("Start");
// setTimeout(function cb() {
//   console.log("call back");
// }, 5000);
// console.log("end");
// let startDate = new Date().getTime();
// let endDate = startDate;
// while (endDate < startDate + 10000) {
//   endDate = new Date().getTime();
// }
// console.log("while expires");

//  to calculate area

// let radious = [1, 2, 3, 4];
// let calculateArea = function (radious) {
//   let output = [];
//   for (let i = 0; i < radious.length; i++) {
//     output.push(Math.PI * radious[i] * radious[i]);
//   }
//   return output;
// };
// console.log(calculateArea(radious));

// to calculate array of circumference

// let radious = [1, 2, 3, 4];
// let calculateCircum = function (radious) {
//   let output = [];
//   for (i = 0; i < radious.length; i++) {
//     output.push(2 * Math.PI * radious[i]);
//   }
//   return output;
// };
// console.log(calculateCircum(radious));

//  to Calculate Diameter

// let radious = [1, 2, 3, 4];
// let calculateDiameter = function (radious) {
//   let output = [];
//   for (i = 0; i < radious.length; i++) {
//     output.push(2 * radious[i]);
//   }
//   return output;
// };
// console.log(calculateDiameter(radious));

let radious = [1, 2, 3, 4];

let area = function (radious) {
  return Math.PI * radious * radious;
};

let circumference = function (radious) {
  return 2 * Math.PI * radious;
};

let diameter = function (radious) {
  return 2 * radious;
};

let calculate = function (radious, logic) {
  let output = [];
  for (i = 0; i < radious.length; i++) {
    output.push(logic(radious[i]));
  }
  return output;
};

console.log(calculate(radious, area));
console.log(radious.map(area));
// console.log(calculate(radious, diameter));
// console.log(calculate(radious, circumference));
