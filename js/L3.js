//work with local storage 
// localStorage.setItem("name" , "mohammad");

const data = { 
    nam :"mamad",
    family : "eydi",
    number : 09219872433
}

//localStorage.setItem("Data" , JSON.stringify(data))

const getedData = localStorage.getItem("Data")
console.log(getedData);
parsedData = JSON.parse(getedData)
console.log(parsedData);
localStorage.clear();



//Map this is diffrent with map ; Map is like object but we can set object for key
const myMap = new Map(); 
myMap.set( {name : "mohammad" , family : "eydi"}, 09219872433
)   
console.log(myMap);

