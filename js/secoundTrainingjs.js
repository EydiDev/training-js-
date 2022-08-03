// const Array = ["mohammad-09364826426","reza-09214225731","ali-09210781758"]
//  const searchedName = prompt("search the name")
// // console.log(searchedName);
// for (let i = 0; i < Array.length; i++) {
//     let splitedName = Array[i].split("-")
   
//    if (Array[i].includes(searchedName)) {
//         console.log(`the name number is ${splitedName[1]}`);
//         break;
//     }
// }
 
//برنامه ای بنویسید که اعدااد  1 تا 30 را که جذر ساده دارند چاپ کنند

const num = prompt("Enter your number !")
for (let i = 1; i < num; i++) {
    let jazr = Math.sqrt(i)
    if (Math.floor(jazr) !== jazr) {
       continue;
     
    }
     console.log(i)
}