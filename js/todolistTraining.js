const submit = document.getElementById("sub");
const ul = document.getElementById("ul")
const text =  document.getElementById("todoTextInput");
console.log(text);
submit.addEventListener("click" , subclicked)



function subclicked() {
 const newElDiv =   document.createElement("div");
 newElDiv.className= "newElDiv";
 ul.appendChild(newElDiv)

 const newEl =   document.createElement("li");
 newEl.className= "li";
 newEl.innerText=text.value;
 
 console.log(newEl);
 newElDiv.appendChild(newEl)
text.value = "";

const completedButton = document.createElement("button")
completedButton.innerHTML = "<i class='fa-solid fa-check'></i>";
completedButton.classList.add("completeButton")
newElDiv.appendChild(completedButton)

const deleteButton = document.createElement("button")
deleteButton.innerHTML = "<i class='fa-solid fa-trash'></i>";
deleteButton.classList.add("deleteButton")
newElDiv.appendChild(deleteButton)
}