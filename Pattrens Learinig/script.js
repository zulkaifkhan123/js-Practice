// Design Pattren :

// Design Pattren is way a proven way to solve a common problem by writing a structured and better coding...

// Module Pattren : it is a design pattren in which we group a related data and hide it's private data and exposing only what is needed .
// Module Pattren usually use clousers and IIFE

// Module Pattren using IIFE

let counter = (function () {
  let count = 0;

  function increment () {
    console.log(count++)
  };
  function decrement () {
    console.log(count--);
  };
  function clear () {
    count=0;
    console.log(count);
  };
  
  return {
    inc : increment , // this is reveling module pattren 
    dec : decrement , // because we mapped or change the fun to public names
    cl : clear
  }
  
})();


// Factory Function : it is a function use to create objects and return object instead of using class or constructor function.

// this is factory funciton pattren .

function createUsers () {
    const users = [] ; // private variable
    return {
        show : function(){
            console.log(users)
        },
        add : function(name , age){
            const user = {name , age};
            users.push(user);
            console.log(`New User Added : ${name} of age ${age} !`);
        },
        remove : function(name) {
            let store = users.filter((user)=>{
                return user.name != name
            })
            console.log(`User ${name} removed if existed.`);
        },

    }
}




// Observer Pattren 
//The Observer Pattern is a way to make one object (called the subject) notify other objects (called observers) automatically when something changes.

// Think of it like a subscription:

// The subject is like a YouTube channel.

// Observers are like subscribers.

// When the channel uploads a new video, all subscribers get notified.

class NewsChannel {
  constructor() {
    this.subscribers = []; 
  }
  subscribe(observer) {
    this.subscribers.push(observer);
  }
  unsubscribe(observer) {
    this.subscribers = this.subscribers.filter(sub => sub !== observer);
  }
  notify(news) {
    this.subscribers.forEach(sub => sub.update(news));
  }
}

class Subscriber {
  constructor(name) {
    this.name = name;
  }
  update(news) {
    console.log(`${this.name} received news: ${news}`);
  }
}

const channel = new NewsChannel();

const sub1 = new Subscriber("Ali");
const sub2 = new Subscriber("Sara");

channel.subscribe(sub1);
channel.subscribe(sub2);

channel.notify("New JavaScript tutorial!");

// Output:
// Ali received news: New JavaScript tutorial!
// Sara received news: New JavaScript tutorial!
