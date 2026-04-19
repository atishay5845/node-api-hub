// require('./sum');

var a = 10;
var b = 20;

// const obj = require('./sum');
// obj.calculateSum(a, b);
// console.log(obj.x);


//obj desturcturing
// const { calculateSum, x } = require('./sum');
// calculateSum(a, b);

//es6 module system
import { calculateSum, x } from './sum.js';
calculateSum(a, b);

console.log(x);