
// Memoization is the process of storing the result of a function call in a cache so 
// that when the same input occurs again, the function returns the cached result 
// instead of recalculating or fetching it again, which improves performance.


function fetchUser(){
    let cache = {};
    return function (userId){
        if(cache[userId]){
            console.log(`fetching from cache ...`)
            return cache[userId];
        }
        else {
            console.log(`fetching data for : ${userId}...`)
            cache[userId] = {userId , name : `ali${userId}`};
            return cache[userId];
        }
    }
}
let user1 = fetchUser();

console.log(user1(2))
console.log(user1(2))
console.log(user1(5))
