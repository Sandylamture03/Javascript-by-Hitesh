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

// let radious = [1, 2, 3, 4];

// let area = function (radious) {
//   return Math.PI * radious * radious;
// };

// let circumference = function (radious) {
//   return 2 * Math.PI * radious;
// };

// let diameter = function (radious) {
//   return 2 * radious;
// };

// let calculate = function (radious, logic) {
//   let output = [];
//   for (i = 0; i < radious.length; i++) {
//     output.push(logic(radious[i]));
//   }
//   return output;
// };

// console.log(calculate(radious, area));
// console.log(radious.map(area));
// console.log(calculate(radious, diameter));
// console.log(calculate(radious, circumference));

//  Episode 19 : map, filter & reduce

// let arr = [5, 1, 3, 2, 6];
// function double(x) {
//   return x * 2;
// }
// let doubledArr = arr.map(double);
// console.log(doubledArr);

// function tripple(x) {
//   return x * 3;
// }
// let trippledArr = arr.map(tripple);
// console.log(trippledArr);

// let binaryArrr = function binary(x) {
//   return x.toString(2);
// };
// let converted = arr.map(binaryArrr);
// console.log(converted);

// let binaryArr = arr.map((x) => x.toString(2));

// //console.log(binaryArr);

// function isOdd(x) {
//   return x % 2;
// }
// let oddArr = arr.filter(isOdd);
// console.log(oddArr);

// function isEven(x) {
//   return x % 2 === 0;
// }
// let evenArr = arr.filter(isEven);
// console.log(evenArr);

// let array = [5, 1, 3, 2, 6];

// function findSum(arr) {
//   let sum = 0;
//   for (i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }
// console.log(findSum(array));

// let sumOfElement = array.reduce(function (arr, current) {
//   arr = arr + current;
//   return arr;
// }, 0);

// console.log(sumOfElement);

// function findMax(arr) {
//   let max = 0;
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// console.log(findMax(array));

// let output = array.reduce(function (acc, current) {
//   if (current > acc) {
//     acc = current;
//   }
//   return acc;
// }, 0);
// console.log(output);

// const users = [
//   {
//     firstName: "Alok",
//     lastName: "Raj",
//     age: 23,
//   },
//   {
//     firstName: "Ashish",
//     lastName: "Kumar",
//     age: 29,
//   },
//   {
//     firstName: "Ankit",
//     lastName: "Roy",
//     age: 29,
//   },
//   {
//     firstName: "Pranav",
//     lastName: "Mukherjee",
//     age: 50,
//   },
// ];

// let fullNameArr = users.map((user) => user.firstName + " " + user.lastName);
// console.log(fullNameArr);

// let report = users.reduce((acc, curr) => {
//   if (acc[curr.age]) {
//     acc[curr.age] = ++acc[curr.age];
//   } else {
//     acc[curr.age] = 1;
//   }
//   return acc;
// }, {});
// console.log(report);

// let output = users
//   .filter((user) => user.age < 30)
//   .map((user) => user.firstName);
// console.log(output);

// let putput = users.reduce((acc, curr) => {
//   if (curr.age < 30) {
//     acc.push(curr.firstName);
//   }
//   return acc;
// }, []);
// console.log(putput);

//  Episode 20 : Callback

// console.log("Namaste");
// setTimeout(function () {
//   console.log("javascript");
// }, 5000);
// console.log("season 2");

// function downloadPhoto(photo, handlePhoto) {
//   function handlePhoto(error, photo) {
//     if (error) console.error("Download error!", error);
//     else console.log("Download finished", photo);
//   }

//   console.log("Download started");
// }
// downloadPhoto();

//  Episode 21 : Promises
// let URL = "https://api.github.com/users/alok722";
// let user = fetch(URL);

// user.then(function (data) {
//   console.log(data);
// });

//   Episode 22 : Creating a Promise, Chaining & ErrorHandling

//  createOrder, proceedToPayment,  showOrderSummary, updateWallet

let cart = ["shoes", "pannts", "kurta"];

// Consumer part of promise
let promise = createOrder(cart);
//console.log(promise);

promise
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentId) {
    return showOrderSummary(paymentId);
  })
  .then(function (summaryId) {
    return updateWallet(summaryId);
  })
  .catch(function (err) {
    console.log(err.message);
  });

// Producer part of Promise
function createOrder(cart) {
  let promise = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      let err = new Error("Cart is not Valid");
      reject(err);
    }
    let orderId = 250303;
    if (orderId) {
      setTimeout(function () {
        console.log(`order created for items: ${cart.join(", ")}`);
        resolve("order ID:250303");
      }, 1000);
    }
  });
  return promise;
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(`payment processed for ${orderId}`);
      resolve("payment ID: 0708");
    }, 1000);
  });
}

function showOrderSummary(paymentId) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(`order summary shown for ${paymentId}`);
      resolve("Summary ID: 789");
    }, 1000);
  });
}

function updateWallet(summaryId) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(`wallet updated with ${summaryId}`);
      resolve("wallet updated");
    }, 1000);
  });
}

function validateCart(cart) {
  return true;
}
