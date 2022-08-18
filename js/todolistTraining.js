const submit = document.getElementById("sub");
const ul = document.getElementById("ul")
const text =  document.getElementById("todoTextInput");
console.log(text);
submit.addEventListener("click" , subclicked)



function subclicked() {
 let newEl =   document.createElement("li");
 newEl.className= "li";
 newEl.innerText=text.value;
 
 console.log(newEl);
 ul.appendChild(newEl)
}