// Prototype inheritance is a mechanism where objects inherit shared methods 
// from a constructor function or class through the prototype property.


// 1st way to do 

// function Persons(){
//     this.name = "ali"
// }

// Persons.prototype.sayHello = function(){
//     return this.name + " Hello."
// }


// let p = new Persons();
// console.log(p.sayHello());
// let p2 = new Persons();
// console.log(p.sayHello());

// here p and p2 is inheriting shared methods using prototype


class Person{
    constructor(){
        this.name = "ali"
    }
    sayHello(){
        return "Hello "+this.name;
    }
}

let person1 = new Person();
console.log(person1.sayHello())
let person2 = new Person();
console.log(person1.sayHello())

// here person1 and person2 are inheriteing shared properteis and methods using 
// prototype