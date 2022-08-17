
const kalameha = ["HELLO" , "GOD" , "YOU" , "STAR" , "CAR" , "MECHANIC"];
const horoof = document.querySelectorAll('.td')

let clicked = [];
let result = "";

const w = document.getElementById("W");

const image = document.getElementById("photo")

function selectRandomItem() {
    randomItem = kalameha[Math.floor(Math.random()*kalameha.length)]
        console.log(randomItem);
    horoof.forEach(item => {
        item.addEventListener("click" , buttonHandler)
    });
   
  }






function letterHandler(letter) {
    clicked.indexOf(letter) === -1 ? clicked.push(letter) : null ;
    if (randomItem.includes(letter)) {
          setUnderscores();
    }else if (!randomItem.includes(letter)){
        
    }
}
function setUnderscores() {
    let splitedWord = randomItem.split("");
    console.log(splitedWord);
    let mappedWord = splitedWord.map(letter => (clicked.indexOf(letter) >= 0 ? letter : " _"))
    console.log(mappedWord);
    result = mappedWord.join("");
    w.innerText=result;

}

function chickIfWon() {
    if (randomItem === result) {
      document.getElementById("go").style.display = "block";

       
    }
}

function buttonHandler(event) { 

    event.target.className = "clck"
    letterHandler(event.target.innerText)
    console.log(event.target.innerText);
chickIfWon();
 }

 selectRandomItem();
 setUnderscores();

