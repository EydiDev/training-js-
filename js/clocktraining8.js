const div = document.querySelector("clock")
const h1 = document.querySelector("#h1")

function setTime() {
    date = new Date();
    let H = date.getHours();
    let M = date.getMinutes();
    let S = date.getSeconds();
    
    if (H<10) {
        H = `0${H}`
    }
    if (M<10) {
        M = `0${M}`
    }
    if (S<10) {
        S = `0${S}`
    }
    
    let clock = `${H}:${M}:${S}`
    
h1.innerText = clock

}
setInterval(setTime , 1000)

function setTime2() {  
    date = new Date();
    let H = date.getHours();
    let M = date.getMinutes();
    let S = date.getSeconds();
    
    if (H>12) {
        H-=12
        
    }
    if (H<10) {
        H = `0${H}`
    }
    if (M<10) {
        M = `0${M}`
    }
    if (S<10) {
        S = `0${S}`
    }
    
    let clock = `${H}:${M}:${S}`
    
    H1.innerText = clock;
}
setInterval(setTime2 , 1000)