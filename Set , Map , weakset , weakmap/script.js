
// Set : set is a built in object in js which is use to store unique values not duplicate values.
// Stores only unique values
// Can store any data type (number, string, object, array, function)
// Values are stored in insertion order
// Common methods:
// add() → add a value
// delete() → remove a value
// has() → check if value exists
// size → total number of values

let obj = {roll : 14, age : 12};
let arr = [1,2,3,4,5,6]

const sets = new Set();

sets.add(obj)
sets.add(arr)
console.log(sets);

sets.forEach((val )=>{
    console.log(val )
})

for(let se of sets){
    console.log(se)
}


// Map : A Map is a JavaScript object that stores data in key-value pairs.
// Both keys and values can be any data type.


let myMap = new Map();

myMap.set("name", "Ali");
myMap.set("age", 22);

console.log(myMap.get("name"));
// Output: Ali


let user = { id: 1 };

let userMap = new Map();
userMap.set(user, "User Data");

console.log(userMap.get(user));
// Output: User Data
