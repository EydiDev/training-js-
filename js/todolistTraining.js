const submit = document.getElementById("sub");
const ul = document.getElementById("ul")
const text =  document.getElementById("todoTextInput");

submit.addEventListener("click" , subclicked)



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