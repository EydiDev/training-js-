<<<<<<< Updated upstream
const horoof = document.querySelectorAll(".td");
let ax = document.getElementById("photo");
let word = document.getElementById("W");
const words = ["HELLO", "GOD", "MECHANIC" , "POOL" , "SKY"];
let rand = "" ; 
let randomItem = "";
let clicked = [];
let result = "";
  rand = Math.floor(Math.random()*words.length);
  randomItem = words[rand];
  console.log(randomItem);
function selectRandomItem() {
    

  horoof.forEach(item => {
    item.addEventListener("click" , function (e) {
        const  xx = e.target.innerText;
       console.log(xx);
       if (randomItem.includes(xx)) {
            clicked.indexOf(xx) === -1 ?  clicked.push(xx) : null ; 
        console.log(clicked);

       splitedWord =  randomItem.split("");
       console.log(splitedWord);
       mappedWord = splitedWord.map(xx => (clicked.indexOf(xx) >= 0 ? xx : "_ "));
       result=mappedWord.join("");
       word.innerHTML=result; 
       
       }
       
      })

});
  }
  selectRandomItem();




=======
const kalameha = ["HELLO" , "GOD" , "YOU" , "STAR" , "CAR" , "MECHANIC"];
const horoof = document.querySelectorAll('.td')

let clicked = [];


console.log(horoof);


function selectRandomItem() {
    randomItem = kalameha[Math.floor(Math.random()*kalameha.length)]
    console.log(randomItem);
    horoof.forEach(item => {
        item.addEventListener("click" , buttonHandler)
    });

  }
selectRandomItem();


function setUnderscores() {
    let splitedWord = randomItem.split("");
    console.log(splitedWord);
    let mappedWord = splitedWord.map(letter => (clicked.indexOf(letter) >= 0 ? letter : "_"))
    console.log(mappedWord);
}


function letterHandler(letter) {
    clicked.indexOf === -1 ? clicked.push(letter) : null ;
    if (randomItem.includes(letter)) {
        
    }else if (!randomItem.includes(letter)){

    }
}


function buttonHandler(event) { 

    event.target.className = "clck"
    letterHandler(event.target.innerText)
    console.log(event.target.innerText);
    setUnderscores();
 }
>>>>>>> Stashed changes
