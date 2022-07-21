//vars
var name = "mohammad";
var age = "21";
console.log(name)
console.log(age)
console.log(typeof age)

name = "ali";
console.log(name)

console.log("----------------------------")

//let & const
let name2 = "mohammad";
let age2 = 21;
console.log(name2)
console.log(age2)
console.log(typeof age2)

name2 = "ali";
console.log(name2)

console.log("-----------------------------")


const name3 = "mohammad";
console.log(name3)

//name3 = "ali"  //we cant change this varriable because const cant change
console.log(name3)

console.log("-----------------------------")

//typeof

let carName =  "bmw";//string
console.log(typeof carName)
let carAge = 24;//number
console.log(typeof carAge)
console.log(carName == carAge)//boolean
let carBreaks = ["back door", "tire" , 2 , false , undefined , null];//تایپ ارایه ها ابجکت است 
console.log(typeof carBreaks)//array object
let mohammad = {father : "hamed" , mother :"tabande" , age : 21 , married : null };
console.log(typeof mohammad)//object
let wife = null ; 
console.log(typeof wife)//object
let kid ;
console.log(typeof kid)//undifined

console.log("----------------------------")

//amalgar ha 

//moqayeseii == , != , === , !== , < , > , <= , >= 
let x = 5 ; 
let y = "5";

console.log(x == y) //meqdar 
console.log(x != y) //mosavi nabodane meqdar

console.log("-----------------------")
let z = 10 ; 
let l = "10" ;
console.log(z === l) //noe va meqdar dar inja z mosavi l nis chon noeshon farq dare 
console.log(z !== l)//mosavi nabodane noe ya meqdar 

console.log("-----------------------")
//manteqi && , ||
let first = true ; 
let sec = false;
let third = true ;
let fourth = false ;

console.log(first && sec)// t v f
console.log(first && third)// t v t
console.log( sec && fourth)//f vf

console.log("-------------------")

console.log(first || sec) // t v f
console.log(first || third ) // t v t 
console.log(sec || fourth) // f v f 
 
console.log("-------------------")
//karborde amalgar haye manteqi 
let yek1 = true ;
let do2 =  false ; 
 if (yek1 ||  do2) {
     document.getElementById("h2").innerHTML = "sdfsdf";
     
 }
//entesabi  += , -= , *= , /= , %=

let hh = 7 ;
let bb = 20  ;
bb += hh;
console.log(bb)//27
bb -= hh ;
console.log(bb)//20
bb *= hh ;
console.log(bb)//140
bb /= hh ;
console.log(bb)//20
bb%=hh;
console.log(bb)//6

console.log("-----------------------")
 
//math 
let rand = Math.random()*100000;
rand = Math.round(rand)
console.log(rand)

let rand1 = 533.6;
let rand2 = 59.5;
let rand3 = 59.5;

rand1= Math.round(rand1)
console.log(rand1)

rand2 =Math.floor(rand2)
console.log(rand2)

rand3 =Math.ceil(rand3)
console.log(rand3)