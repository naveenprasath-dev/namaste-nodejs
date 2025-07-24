
require("./xyz");
// const obj = require("./calculate/sum");
// const multpleObj = require("./calculate/multiple");
// import { calculateSum } from "./sum.js";
const {calculateSum, calculateMultiple} = require("./calculate/index");
const data = require("./data.json");
let a = 10;
let b = 20;


console.log(JSON.stringify(data));
calculateSum(a,b);
calculateMultiple(a,b);


