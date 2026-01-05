// Prototypal Inheritence is the process in which one object inherite another 
// object properties and behaviours from another object

// 1st way to do prototypal inhertience  (Recommended).

// let obj = {
//     name : "Zulkaif"
// }

// let obj2 = Object.create(obj)
// obj2.age = 23;


// let obj3 = Object.create(obj2)
// obj3.roll = 294

// console.log(obj3)





// 2nd way to do prototypal inheritence

// let obj = {
//     name : "Zulkaif"
// }

// let obj2 = {
//     age : 23 
// }
// Object.setPrototypeOf(obj2,obj);

// let obj3 = {
//     rollNumber : 294
// }
// Object.setPrototypeOf(obj3,obj2);

// console.log(obj3)




// 3rd way to do Prototypal inheritence 

// let obj = {
//     name : "Zulkaif"
// }

// let obj2 = {
//     age : 23
// }
// obj2.__proto__ = obj

// let obj3 = {
//     rollnumber : 294
// }
// obj3.__proto__=obj2

// console.log(obj3)
