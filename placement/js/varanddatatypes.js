console.log("hello world");

//var
var variable = 'gonna learn variables';
//let4
let firstvar = 'hello';
firstvar = 'world';
console.log(firstvar);
//const - we cant change the value once we declared using const datatype

//we cannot use spl char for variable name 

// var,let,const are reserved in js so we cannot use var var = "something";



//DATATYPES

//strings

const singlequotes =  'nithya';
const doublequotes =  "nithya"; //both are same
console.log(singlequotes);

//In js we use $ symbol to print the real val of the variable as we do in c using %d

const myname = "shree";
const backticks = `hellooo, ${myname}!`; //we should use backticks while printing real values
console.log(backticks);

const add = `{$2+$3}`;
console.log(add); //prints as it is

const addi = `${2+3}`;  
console.log(addi); //prints 5 //$ will be used to print the real value
console.log(typeof addi); // will print the type 


//Numbers (no need to mention int float and all in js)
"As this Numbers datatype will take care of what type of number is"
 const fnum = 5;
 const snum = 6;
 console.log(fnum+snum);

 const res = myname/fnum;
 console.log(res); //NaN (not a number);

//Null
const age = null; //unknown

//typeof null is object
//undefined
let a;  // prints undefined because if we declare a variable and it is not being initialized
//js will take it as undefined and display it in console


"these all are primitive data types"

//objects are not primitive they are used to group one or more variables

const person = {
    name: "nithya",
    age : 19
}
console.log(person);

//dot notation
console.log(typeof person.name);  //string

//Array

const arr = [1,2,3,4];
console.log(arr);


// unlike c,cpp and java they are statically typed, a variable in js can contain any type of data int,float,string,boolean
// because it is a dynamically typed language. 


"At one moment it can be string and afer some time it can boolean"









 




















 //console.log()