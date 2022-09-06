//import and export
import A, { name , family , nf ,age} from "../js/learn6.js";//nf = name family
console.log(name);
console.log(family);
nf()
console.log(age);
A(666,111)




//try catch learning

try {
    const h1 = document.querySelector("h21");
        h1.innerHTML="ya allah"
    }catch(error) {
        console.log("Error");
    }