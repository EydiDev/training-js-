//work with local storage 
// localStorage.setItem("name" , "mohammad");

// const data = { 
//     nam :"mamad",
//     family : "eydi",
//     number : 09219872433
// }

//localStorage.setItem("Data" , JSON.stringify(data))

// const getedData = localStorage.getItem("Data")
// console.log(getedData);
// parsedData = JSON.parse(getedData)
// console.log(parsedData);
// localStorage.clear();



//Map this is diffrent with map ; Map is like object but we can set object for key
const myMap = new Map(); 
myMap.set( {name : "mohammad" , family : "eydi"}, 09219872433)   
myMap.set([1,2]  , "numbers") 
myMap.set(1 , 2)
myMap.set("name" , "mohammad")
myMap.delete("name")
// myMap.clear()
console.log(myMap.has(1));


//ُSet  مجموعه ای از اعضای غیر تکراری
const array = [1,2,2,3,3,3,4,4,4,4];
const mySet = new Set(array);
console.log(mySet);//اعداد تکراری حذف شدند
array.forEach(item => {console.log(item);});
const lastSet =new Set([1,1,2,3,4,5,6,6,"w" , "z" , "z"  ,[5,6,7]]) ;
lastSet.delete("z");
console.log(lastSet);

//Symbol  یک دیتا که هرکدوم از ان مفدار یونیک و یکتایی دارد
const name = Symbol("name")
const age = Symbol("age")

const userD = {
    name : "mohammad",
    family : "eydi",
    [age] : 21
}
console.log(name);
console.log(age);
console.log(Object.keys(userD));//ما دسترسی به مقادیری که با سیمبل تعریف کردیم نداریم

//setInterval clearInterval & setTimeout clearTimeout

const btn = document.querySelector("#start");
const btn2 = document.querySelector("#end")
btn.addEventListener("click" , func);
btn2.addEventListener("click" , func2);



function func() {
   // setTimeout(()=>console.log("hello"),2000)
  log =  setInterval(()=>console.log("hello"), 2000)
}
function func2() {
    //clearTimeout
    clearInterval(log)
  }
const div = document.querySelector("div")
var indexNumber = 0;
const colors = ["red" , "orange" , "yellow" , "green" , "blue" , "purple" , "white"]

function colorChange() { 
    div.style.backgroundColor= colors[indexNumber]
 }

 setInterval(()=>{
    colorChange();
    indexNumber++;
    if (indexNumber == colors.length) {
        indexNumber = 0;
    }
 },2000)