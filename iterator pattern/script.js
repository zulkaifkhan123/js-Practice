
function iteration (start = 1 , end = Infinity , step = 1){
    let current = start ;
    return {
        next(){
            if(current < end){
                return {value : current + step , done : false};
            }
            return {done : true};
        }
    }
}

let iter = iteration(1,20,2);
const result = iter.next();

while(!result.done){
    console.log(result.value);
    result = iter.next();
}