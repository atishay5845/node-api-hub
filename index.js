require('./sum');

var a = 10;
var b = 20;

const obj = require('./sum');
obj.calculateSum(a, b);
console.log(obj.x);


z = "ma ka bhosda" // no error in common js because of globalThis in node js but in browser it will give error because of strict mode in browser and it will not allow us to create global variables without var, let or const keyword   but will give error in es6 module system because of strict mode in es6 module system and it will not allow us to create global variables without var, let or const keyword


//obj desturcturing
const { calculateSum, x } = require('./sum');
calculateSum(a, b);

//es6 module system
// import { calculateSum, x } from './sum.js';
// calculateSum(a, b);

// console.log(x);