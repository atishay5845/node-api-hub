console.log("Module with sum function");

// function calculateSum(a, b) {
//   console.log(a + b);
// }
// common js module system
// var x = 5495;
// module.exports = {
//   calculateSum: calculateSum,
//   x: x
// }

// es6 module system
export var x = 5495;
export function calculateSum(a, b) {
  console.log(a + b);
}