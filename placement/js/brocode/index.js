const { String } = require("core-js");
let a = "";
let x = 9;
let y = "pizza";
let z = "true";

x = String(x);
y = Number(y); //if we try to convert a string to number we NaN
z = Boolean(z);
a = String(a);


let l;
let m;
//if we don not define any value to a variable 
//we get undefined for string and NaN for numbers
console.log(x,typeof x);
console.log(y,typeof y);
console.log(z,typeof z);
console.log(a,typeof a);
