// Custom Utilities (how to make your own Map function or method);


function myMap(array , callback){
    let newArray = [];

    for(let i = 0 ; i < array.length ; i++){
        newArray.push(callback(array[i]));
    }

    return newArray ;
}

let array = [1,2,3];
let ans = myMap(array,function(arr){
    return arr + 1 ;
});

console.log(ans)