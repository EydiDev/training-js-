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

