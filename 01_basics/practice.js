// let n = 10;
// for (i = 1; i <= 10; i++) {
//   let str = "";
//   for (let j = 1; j <= i; j++) {
//     str = str + `${j} `;
//   }
//   console.log(str);
// }

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5 6
// 1 2 3 4 5 6 7
// 1 2 3 4 5 6 7 8

// let n = 5;
// for (i = n; i >= 1; i--) {
//   let str = " ";
//   for (let j = 1; j <= i; j++) {
//     str = str + "* ";
//   }
//   console.log(str);
// }

// * * * * *
// * * * *
// * * *
// * *
// *

// let n = 5;
// for (i = 1; i <= n; i++) {
//   let str = "";
//   for (let j = 1; j <= i; j++) {
//     str = str + "* ";
//   }
//   console.log(str);
// }

// let m = n - 1;
// for (i = m; i >= 1; i--) {
//   let str = "";
//   for (let j = 1; j <= i; j++) {
//     str = str + "* ";
//   }
//   console.log(str);
// }

// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * *
// *

// Function currying..
// with bind method and  with closures

// let multiply = function (x, y) {
//   console.log(x * y);
// };

// let multiplyByTwo = multiply.bind(this, 2);
// multiplyByTwo(3);

// let multiplyByThree = multiply.bind(this, 3);
// multiplyByThree(5);

// let multiplyByFour = multiply.bind(this, 4);
// multiplyByFour(5);

let multiply = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

let multiplyByTwo = multiply(2);
multiplyByTwo(3);

let multiplyByThree = multiply(3);
multiplyByThree(5);
