//selectors
//multiple selector
const heads = document.getElementsByTagName("h1")
console.log(heads);
const anchors = document.getElementsByClassName("anchor")
console.log(anchors);
anchors[0].text = "heelo"
const querys = document.querySelectorAll(".anchor");
querys.forEach(item => {
    item.style.color = "Red";
});
console.log(querys);

 

//single selector
const firstDiv = document.getElementById("fistdiv")
console.log(firstDiv);
const secDiv = document.querySelector("#secdiv")
secDiv.style.backgroundColor = " silver" ;
secDiv.style.color= "purple"
console.log(secDiv);


document.getElementsByClassName("anchor")[0].style.color = "red"
console.log();

//childs and parents 
const ul = document.querySelector("ul")
console.log(ul.children);
console.log(ul.lastElementChild);
console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);
ul.lastElementChild.style.color="red"
console.log(ul.parentElement);