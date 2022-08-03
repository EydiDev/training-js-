const Array = ["mohammad-09364826426","reza-09214225731","ali-09210781758"]
const searchedName = prompt("search the name")
// console.log(searchedName);
for (let i = 0; i < Array.length; i++) {
    let splitedName = Array[i].split("-")
   
   if (Array[i].includes(searchedName)) {
        console.log(`the name number is ${splitedName[1]}`);
        break;
    }
}
