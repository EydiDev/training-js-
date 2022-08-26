//callback
//synchronus , asynchronus
// console.log("started");
// console.log("1");
// console.log("2");
// function hi() { 
//     setInterval(()=>{
//         console.log("returned");
//         return {name : "milad" , email :"milad@jksdfh.gmail.com"}
//     },5000)


//  }

// const userData = hi();
// console.log(hi());

// console.log("3");
// console.log("4");
// console.log("ended");
//ctrl /
//ta inja synchronus ke dar an function ma hanoz 5 saniash nareside ke return kone meqdaro va ina be tartib ejra shodan , log data mon undefined mishe are

console.log("started");
console.log("1");
console.log("2");
function name(callback) {
    setTimeout(()=>{
        callback({name: "mamad", email : "mamad"}) 
        
    },2000)
  }
  function age(callback) {
      setTimeout(() => {
           callback({age: 21})
      },5000)
     
    }
    function work(callback) { 
        setTimeout(() => {
            callback("programmer and trader")
        }, 2000);
     }
 name(data =>{
    console.log(data)
    age(age =>{
        
        console.log(age)
        work(data =>{
            console.log(data);
        })
    })
});

console.log("3");
console.log("4");
function sayHi(callback) {
    setTimeout(() => {
        callback("hello")
    }, 10000);
  }


sayHi(function (data) { 
    console.log(data);
 })
console.log("End");

