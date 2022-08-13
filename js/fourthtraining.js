const persons = [ 
    {name: "mohammad" , age : 21} ,
    {name: "ali" , age : 22} ,
    {name: "reza" , age : 18} ,
    {name: "ahmad" , age : 25} 
]
const mydiv = document.getElementById("myDIV")
persons.forEach(item => {
    const P = document.createElement("p");
   P.className = "paragraph";
   P.innerHTML = `${item.name}'s rate is ${item.age}`
    mydiv.appendChild(P)
console.log(P);




});