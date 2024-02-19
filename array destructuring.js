// Array

const xc =[1,15,11,1,12,2,6,2]

// console.log(xc.length);
console.log(xc.indexOf(3,3));

// Array Destructuring
const [first, second, third] = xc; // destructuring
// console.log(first);
// console.log(second);
const [head, ...rest] = xc;
console.log(rest)

// Object