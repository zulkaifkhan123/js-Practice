
// Compusition Function : it is the Process in which we combine two or 
// more functions so that the output of one function become the input of
// another function 


// compusitio of 2 funcitons : 

function sum(a, b){
    return a+b;
}
function Multiply(a){
    return a * a;
}

function compose (f1 , f2){
    return function(a ,b){
        return f2(f1(a , b))
    }
}

let result = compose(sum ,Multiply);
console.log(result(2,3))

