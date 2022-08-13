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

//append and delete
const ele = document.createElement('div')
const x = document.getElementById("eleDiv")
console.log(ele);
ele.id ="eleDivChild";
ele.className = "class1 class2"
ele.setAttribute("list-style" , "[1][2][3]")
ele.setAttribute("style" , "font-style : italic ; font-size : 24px")
ele.innerText= " hello"
// x.appendChild(ele)
const old =document.getElementById("head")  ; 
const container = document.getElementById("fistdiv").nextElementSibling;
// console.log(container);

// replace
container.replaceChild(ele , old);
// container.remove()
const hhh = document.getElementById("hh")
const lastdiv = document.getElementById("lastDiv")
console.log(lastdiv);
lastdiv.removeChild(lastdiv.children[0]);
// lastdiv.remove()