
const kalameha = ["HELLO" , "GOD" , "YOU" , "STAR" , "CAR" , "MECHANIC"];
const horoof = document.querySelectorAll('.td')

let clicked = [];
let result = "";
const w = document.getElementById("W");
const image = document.getElementById("photo")
let mistakes = 0;

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
          checkIfWon();
    }else if (!randomItem.includes(letter)){
        mistakes++;
        checkIfLost();
        updateHangmanPicture()
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
function checkIfWon() {
    if (randomItem === result) {
      document.getElementById("go").innerText = "you won!";
      document.getElementById("keyboard").style.display = "none "; 
    }
}

function checkIfLost() {
    if (mistakes === 6) {
        console.log("Ddd");
        document.getElementById("go").innerText = "you lost!";
       document.getElementById("wi").innerHTML = `the word was = ${randomItem}`
       document.getElementById("keyboard").style.display = "none "; 
    }
}
function updateHangmanPicture() {
    const image = document.getElementById("photo");
    image.src = `../assets/hangman${mistakes}.png`
}

function buttonHandler(event) { 
    
    event.target.className = "clck"
    letterHandler(event.target.innerText)
    console.log(event.target.innerText);
    
    
}

 selectRandomItem();
 setUnderscores();

