function func() {
    const a = b = c = 1;
}

func();
console.log(typeof a, typeof b, typeof c)

let myFun =(a,b)=>
    a*b;
// const cc = ;
console.log(myFun(3,3));

const addArrow = (a, b) => a + b;

// console.log(add(2, 3));  
console.log(addArrow(2, 3));