function firstFun(){
    let xxc = "i am superman"
    function secFun(){
        console.log(xxc);
    }
    return secFun;
}

let outerFun = firstFun();

// console.log(outerFun);
outerFun();