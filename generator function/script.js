
// generator function is function that is used to return value or data step by step using yeild 
// keyword and next() method.
// when we call .next() method it run the function and yeild keyword return value or data and 
// then stop the funciton . 
// and again when we call .next() method it countinue function from where it was paused 

//Generator functions are used to return values step by step. They use the yield keyword to return a value and pause the function.
//We can resume the function from where it was paused by calling the .next() method. Each time .next() is called, the function continues from the last yield point and either gives the next value or finishes execution.


function* generateIDs(){
    let id = 1 ;
    while(true){
        yield console.log(id++)
    }
}

let store = generateIDs();
store.next(); // 1
store.next(); // 2

