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

// console.log("started");
// console.log("1");
// console.log("2");
// function name(callback) {
//     setTimeout(()=>{
//         callback({name: "mamad", email : "mamad"}) 
        
//     },2000)
//   }
//   function age(callback) {
//       setTimeout(() => {
//            callback({age: 21})
//       },5000)
     
//     }
//     function work(callback) { 
//         setTimeout(() => {
//             callback("programmer and trader")
//         }, 2000);
//      }
//  name(data =>{
//     console.log(data)
//     age(age =>{
        
//         console.log(age)
//         work(data =>{
//             console.log(data);
//         })
//     })
// });

// console.log("3");
// console.log("4");
// function sayHi(callback) {
//     setTimeout(() => {
//         callback("hello")
//     }, 10000);
//   }


// sayHi(function (data) { 
//     console.log(data);
//  })
// console.log("End");
//promise
console.log("1");
console.log("2");
function getUserData() { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("hello data");
            resolve([1,2,3,4])
        },2000)
    })
    
 }
function getUserAge() { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("hello");
            resolve(
                {age : 24});
        },2000)
    })}

//  getUserData()
//  .then(data => getUserAge())
//  .then(age =>console.log(age))
//  setTimeout(() => {
//      console.clear()
//  }, 5000);

 //async await
 async function ebe() { 
     const data = await getUserData()
     const age = await getUserAge().then(data => console.log(data))
  } 

  ebe() ;
  
  
  
  console.log("3");
 console.log("4");
