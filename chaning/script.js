// promise chaning -> the process in which we handle asyncronas tasks step by step using .then()

let primise = new Promise((res)=>{
    setTimeout(()=>{
        res("First Step Done !");
    },2000)
    clearTimeout();
})

// here you can see we are handling async tasks step by step using .then()
primise.then((data)=>{
    console.log(`first step : ${data}`);
    return new Promise((res)=>{
        res(200);
    })
}).then((data)=>{
    console.log(`Second Step : ${data}`)
    return 2*2 ;
}).then((data)=>{
    console.log(`third step : ${data}`);
})


// Method Chaning is the process in which we call multiple methods in a
// single line one after another 
// where each method representing the same object (or another object ) so 
// that the next method can be called

let names = " zulkaif khan ";

console.log(names)
names = names.toUpperCase().trim().replace(" ", "_"); // this is what method chaning called.
console.log(names)


class Person{
    constructor(name){
        this.name = name;
    }
    greet(){
        console.log(`Hello ${this.name}`);
        return this; // here this object return again the parent object or currect object -> person , so after calling greet this method move us back to the object so that we can do method chaning and can do like .greet().figth()
    }
    fight(){
        console.log(`i want to figth with ${this.name}`);
        return this;
    }
}

let person1 = new Person("Ali");
person1.greet().fight() // method chaning 
