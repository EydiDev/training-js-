const submit = document.getElementById("sub");
const ul = document.getElementById("ul")
const text =  document.getElementById("todoTextInput");
const slct = document.getElementById("select");
const cls = document.getElementById("cls")

cls.addEventListener("click" ,() => {localStorage.clear()  })
submit.addEventListener("click" , subclicked)
ul.addEventListener("click" , deleteComplete)
slct.addEventListener("click" , filterTodo)
document.addEventListener("DOMContentLoaded" , getTodos)
function subclicked() {
 
 const newElDiv =   document.createElement("div");
 newElDiv.className= "newElDiv";
 ul.appendChild(newElDiv)

 const newEl =   document.createElement("li");
 newEl.className= "li";
 newEl.innerText=text.value;
 
todoSave(text.value)
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

function deleteComplete(event) {
    console.log(event.target);
    const item = event.target;
    const ww = ul.childNodes;   
    if (item.className === "completeButton") {
        wantChecked = item.previousSibling;
        wantChecked.classList.toggle("checked")
       item.parentElement.classList.toggle("completed")
        
    } else if(item.className === "deleteButton" || item.className === "fa-trash" ) {
        const wantRemove = item.parentElement;
       wantRemove.remove()

     deleteSaves(event);
        
    }



}

function todoSave(todo) {
    let todos ;
    if (localStorage.getItem("todos")===null) {
        todos = [];
    }
    else{
        todos =JSON.parse( localStorage.getItem("todos"))
    }
    todos.push(todo)
    localStorage.setItem("todos" , JSON.stringify(todos))
}

function deleteSaves(item) {
    let eve;
    if (localStorage.getItem("todos")===null) {
        todos = [];
    }
    else{
        eve =JSON.parse( localStorage.getItem("todos"))
    }
   console.log(eve);
  
    const inner = event.target.parentElement.innerText;
    
    console.log(inner);
   
   eve.splice(eve.indexOf(inner) ,1);
   localStorage.setItem("todos" , JSON.stringify(eve))
  
}

function filterTodo(event) {
const todos = ul.childNodes;   
let DIV = document.getElementById("ul")  
todos.forEach(function (todo) { 
  
    switch(event.target.value){ 
     case "all":
        todo.style.display = "flex";
        break;
     case "completed":
         if (todo.classList.contains("completed")) {
             todo.style.display  = "flex";
         }
         else{
              todo.style.display  = "none";
         }
         break;
     case "uncompleted":
           if (todo.classList.contains("completed")) {
             todo.style.display  = "none";
         }
         else{
              todo.style.display = "flex" ; }
            break;
}})}

function getTodos() {
    let eve;
    if (localStorage.getItem("todos")===null) {
        eve = [];
    }
    else{
        eve =JSON.parse( localStorage.getItem("todos"))
    } console.log(eve);
    eve.forEach( function (event) {  
         const newElDiv =   document.createElement("div");
 newElDiv.className= "newElDiv";
 ul.appendChild(newElDiv)

 const newEl =   document.createElement("li");
 newEl.className= "li";
 newEl.innerText=event;
 

 newElDiv.appendChild(newEl)


const completedButton = document.createElement("button")
completedButton.innerHTML = "<i class='fa-solid fa-check'></i>";
completedButton.classList.add("completeButton")
newElDiv.appendChild(completedButton)

const deleteButton = document.createElement("button")
deleteButton.innerHTML = "<i class='fa-solid fa-trash'></i>";
deleteButton.classList.add("deleteButton")
newElDiv.appendChild(deleteButton)
    })

}