let displayBox = document.querySelector('#resultinput');
const sd = document.querySelectorAll(".showDisplay")
const ac = document.querySelector(".all-clear")
const calc = document.querySelector(".calculator")
const cl = document.querySelector(".clear-last")
const div = document.getElementById("container")

sd.forEach(item => {
    item.addEventListener("click", function (e) {

        // console.log(item);
        // console.log(e);
        displayBox.value += item.innerText;
      })
});


ac.addEventListener("click" , function (e) {
    displayBox.value = "";
})

calc.addEventListener("click" , function (e) {
  let result = displayBox.value;
  displayBox.value = eval(result)

  })
cl.addEventListener("click", function (e) {
    if (displayBox.value.length === 1) {
        displayBox.value = "";
    }
    else{
        displayBox.value = displayBox.value.substring(0 ,displayBox.value.length-1 )
    }
  })
  console.log(displayBox.value);
   const body = document.firstChild
    console.log(body);
  body.addEventListener("contextmenu" , function (e) {
      e.preventDefault()
    })
    console.log(window.document);

 