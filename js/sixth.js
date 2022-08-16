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




