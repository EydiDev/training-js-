//xmlHttpRequest  GET: get infos       POST : send information
//endpoint

// const xhr = new XMLHttpRequest();
// xhr.open("GET" , "https://jsonplaceholder.typicode.com/posts");


// xhr.onload = () => {
//     let data = xhr.response;
    
//     console.log(data);
//     console.log(typeof(data));
//     data = JSON.parse(data);
//     console.log(data);
//     console.log(typeof(data));
    
// }

// xhr.send();

const xhr = new XMLHttpRequest();
xhr.open("POST" , "https://jsonplaceholder.typicode.com/posts");
const userInfo = {
    name : "mohamad",
    family : "eydi",
    age : 21
}
xhr.setRequestHeader("Content-Type" , "Application/json");
xhr.onload = () => {
    let data = xhr.response;
    
    console.log(xhr.status);
    
    data = JSON.parse(data);
    console.log(data);
    console.log(typeof(data));
    
}
xhr.send(JSON.stringify(userInfo));
//fetch get 

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))


//fetch send
fetch("https://jsonplaceholder.typicode.com/todos" , {
    method:"POST",
    body : JSON.stringify({
        today : "work with xhr", 
        tomorrow : "meditation"
    }),
    headers :{
        "Content-Type" : "application/json"
    }
})
.then((response) =>response.json())
.then((json) => console.log(json))




