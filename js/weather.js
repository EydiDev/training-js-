const key = "6ad36569e2b8df0d766a785446837af0";
// https://api.openweathermap.org/data/2.5/weather?q=tehran&appid=6ad36569e2b8df0d766a785446837af0&units=metric
// `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`
const form = document.querySelector("#container form");
const input = document.querySelector("#cInp");
const ul = document.querySelector("#ul");;
const notfound = document.queryCommandIndeterm("#h3");

form.addEventListener("submit" , e =>{
e.preventDefault();
let cityName = input.value;
const url = ` https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`;
fetch(url)
.then(response => response.json())
.then(data =>   {
    console.log(data);
    const{main:{temp} , name ,sys:{country} , weather} = data;
    const icon =`http://openweathermap.org/img/wn/${weather[0]["icon"]}.png`;
    const des = weather[0]["description"];
    const roundTemp = Math.round(temp)
    console.log(des);

    const li = document.createElement("li");
    li.classList.add("city");
    const markup = `
    <h2 class="city-name">${name} ${country}</h2> 
    <h1 class="city-temp">${roundTemp}</h1> 

    <figure>
    <img src = '${icon}' alt='${des}'>
    <h3>
    ${des}
    </h3>
    </figure>
    `
    li.innerHTML= markup;
    ul.appendChild(li)
})
.catch(() =>{
    h3.innerHTML ="city not found!!!";
})


})
