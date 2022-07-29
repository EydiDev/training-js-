const userChoices = prompt("choose rock or paper or scissors")
if (userChoices) {
  console.log(`you choosed ${userChoices}`) ;
}else{console.log("you cheated")}

const choices = ["rock" , "paper" , "scissors"]

const random = Math.floor(Math.random()*3) 

const computerChoices = choices[random]
console.log(`computer choosed ${computerChoices}`) 


    if (userChoices === computerChoices) {
            console.log("its  tie!");
    }
    else if(userChoices === "rock") {
        if (computerChoices === "scissors") {
            console.log("you win!");
        }
        else{console.log("you loose!")}
    }
    else if(userChoices === "scissors") {
        if (computerChoices === "paper") {
            console.log("you win!");
        }
        else{console.log("you loose!")}
    }
    else if(userChoices === "paper") {
        if (computerChoices === "rock") {
            console.log("you win!");
        }
        else{console.log("you loose!")}
    }
