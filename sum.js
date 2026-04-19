console.log("Module with sum function");

function calculateSum(a, b) {
  console.log(a + b);
}
var x = 5495;
module.exports = {
  calculateSum: calculateSum,
  x: x
}