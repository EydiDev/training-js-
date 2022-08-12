//selectors
//multiple selector
const heads = document.getElementsByTagName("h1")
console.log(heads);
const anchors = document.getElementsByClassName("anchor")
console.log(anchors);
anchors[0].text = "heelo"
const querys = document.querySelectorAll(".anchor")
console.log(querys);

 

//single selector
const firstDiv = document.getElementById("fistdiv")
console.log(firstDiv);
const secDiv = document.querySelector("#secdiv")
console.log(secDiv);