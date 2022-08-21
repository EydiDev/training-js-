const submit = document.getElementById("sub");
const ul = document.getElementById("ul")
const text =  document.getElementById("todoTextInput");

submit.addEventListener("click" , subclicked)
ul.addEventListener("click" , deleteComplete)


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
    
    if (item.className === "completeButton") {
        wantChecked = item.previousSibling;
        wantChecked.classList.toggle("checked")
        
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