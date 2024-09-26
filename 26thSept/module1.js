// const add = require("./module");
// const subt = require('./module')
// const mul = require('./module')
// COMMON JS
// const { add, subt, mul } = require("./module");
//  ES6 WAy

import { add, subt } from "./module.js";
import mul from "./module.js";

console.log(add(3, 4));
console.log(mul(4, 5));
console.log(subt(5, 2));
