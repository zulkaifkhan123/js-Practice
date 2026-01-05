// Recursion is the process in which a function call itself to solve a problem , 
// and it stops when a base case is met.

function factorial(num){
    if(num === 1){
        return 1;
    }
    console.log(num)
    return num * factorial(num - 1);
}

let f = factorial(6);
console.log(f)

function sum(num){
    if(num === 0){
        return 0;
    }
    console.log(num)
    return num + sum(num - 1)
}

let s = sum(5)
console.log(s)