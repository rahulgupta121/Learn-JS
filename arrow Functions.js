let myFun =(a,b)=>{
    console.log(a*b)};
myFun(3,3);

const addArrow = (g, f) => f + g;

// console.log(add(2, 3));  
console.log(addArrow(2, 3));

const zbc =()=> {console.log(2+2)};
zbc();

function regularFunction() {
    setTimeout(function() {
      console.log("Regular function:", this); // 'this' is bound dynamically
    }, 100);
  }
  
  function arrowFunction() {
    setTimeout(() => {
      console.log("Arrow function:", this); // 'this' is inherited from the lexical scope
    }, 100);
  }
  
  regularFunction(); // Output: Regular function: [object Window]
  arrowFunction();   // Output: Arrow function: [object Window]
  