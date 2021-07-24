//Primitive DataType
//1.string
//2.number
//3.symbol
//4.undefined
//5.null
//6. boolean


var a="xyz";
var b=4;
var c;
var d=null;
var e=true;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);

//hoisting: hoisting in javascript refers to the process whereby the compiler allocates memory for
//           variable and function declarations prior to execution of the code
//example:


 var x;
 a=100;
 console.log(x)


 var y;
 console.log(y)