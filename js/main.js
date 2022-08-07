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

console.log("-----------------------")

//work with strings

let asd = "Hello My Name Is Mohammad"
let asd1 = asd.length;//in az 1 shoro mishe 
console.log(asd1)
console.log(asd[20 ])// az 0 shroo mishe shemordan 
console.log(asd.toLowerCase())
console.log(asd.toUpperCase())
console.log(asd.lastIndexOf("N"))// inam az 0
console.log(asd.charAt("24"))// inam az 0
console.log(asd.substring(0 , 10))// ydone qabl az adad akhar o nehson mide 
console.log(asd.split(" "))
console.log(asd.replace("Mohammad" , "MAMAD"))
console.log(asd.includes("Hello"))
console.log(asd.includes("hello"))

console.log("-----------------------")

//template literals

const nam = "mohammad";
const massage = `hello ${nam} welcome!`;
console.log(massage)

console.log("-----------------------")

//work with arrays 

const newArray = ["mohammad" , "ali" , "reza" , "sajjad"]
const newArray2 = ["zahra" , "fateme" , "mahshad" , "mahshid"]
console.log(newArray[2])//برای صدا زدن عضو ارایه باید از Index استفاده کرد که از 0 شروع میشه شمردنش
console.log(newArray)
newArray.push("mahdi") //add in end 
console.log(newArray)
newArray.unshift("vahid") // add in first
console.log(newArray)
newArray.pop() //delete of end 
console.log(newArray)
newArray.shift() // delete of first
console.log(newArray)
newArray.splice(1,2) // delet az x be tedate y (x,y)
console.log(newArray)
newArray2.sort() // sort by abc 
console.log(newArray2)

const Array3 = [...newArray , ...newArray2 , "hello"] //spread operator
console.log(Array3)

console.log("-----------------------")

//training 
const namha = [["mamad" , "ali"] , ["reza" , "mahdi" , "sajjad"]] 
const first1 = namha[0];
const sec2 = namha[1]
const added = [...first1 , ...sec2]
console.log(added)
added.sort()
console.log(added)
added.shift()
console.log(added)

console.log("-----------------------------")
//objects

const asl = {
    
    name : "mohammad" ,
    family : "eydi" , 
    age : 24 , 
    famils : ["pedram" , "nahal"],//array in object
    moadel: { //object in object
        rahnamai : 20,
        dabirestan : 18 
    }
}
//this is how can we work with objects and arrays in objects
const favorite = "name"
const favorite2 = "famils"
const favorite3 = "moadel"
console.log(asl["family"])//برای صدا زدن از درون ابجکت به کلید نیاز داریم 
console.log(asl.name)//روش بالایی و این روش وجود دارد که یک تفاوت دارند
console.log(asl.favorite)//undifined
console.log(asl[favorite])//mohammad تفاوت در اینه 
console.log(asl[favorite2][1])
console.log(asl[favorite3].rahnamai)
console.log(asl[favorite3]["rahnamai"])


console.log("-----------------------------")
//training
const data = { 
    id : 1 ,
    namex : "mohammad" ,
    username : "mamad" , 
    email : "mmmmmmmmm@gmail.com" ,
    address : {
        city : "isfahan",
        street :"tohid sharqi",
        zipcode : "9924365"
    }
}
// const nameOfData = data.name;
// const loc = data.address.city;
// const street = data.address.street;  // این روش گرفتن مقادیر از درون ابجکت یا ارایه
//طول مبکشه به خاطر این که اگه با 20 تا دیتا بخوایم 20 خط باید بنویسیم و متغیر تعریف کنسم 
// const loog = `${nameOfData} lives in ${loc} his street name is ${street} `
// console.log(loog)


//destructuring
const {namex , id , address:{city , street}} = data;//الان  با یک خط کد چندین متغیر ر, گرفتیم 
//const {city , street } = address;

console.log(`hi ${namex} you live in ${city} in ${street} street `)


//destructuring for arrays 

const sazha = ['setar' , 'tar' , 'santoor']
// const saz1 = sazha[0]
// const saz2 = sazha[1]
// const saz3 = sazha[2]


const [saz1 , saz2 , saz3] = sazha ; 
console.log(`we have ${saz1} and ${saz2} and ${saz3}`)

console.log("-----------------------------")
//this is how can we get keys and values of object
const keys = Object.keys(data)
console.log(keys)
const values = Object.values(data)
console.log(values)

console.log("-----------------------------")
//change types 
const str = "5.5"
const str2 = "mmd"
const num = 4
const num2 = 4.25
const arr = ["2" , 4 , 5]
const obj = {
    name : "rez" ,
    famil : "rafee"
}
console.log(parseInt(str))
console.log(parseFloat(str))
console.log(+str) //+ change type of String to Number
console.log(typeof Number(str) , Number(str))
console.log(typeof Number(str2) , Number(str2))
console.log(typeof String(arr) , String(arr))
console.log(typeof String(num) , String(num))
console.log(typeof String(num2) , String(num2))
console.log(typeof String(obj) , String(obj))
console.log(num2.toFixed(2))//tabdil num be str va hazf aashar magar inke dar () tedad ashar morede niaz neveshte shavad
console.log("-----------------------------")
//if , else , else if 
const adad = 70; 
if (adad >=10 && adad<=20) {
    console.log("your number isbetween 10 and 20")
}else if (adad<10){
    console.log("your number is smaller than 10 ")
}else if (adad > 20 && adad <50){
   console.log("your number is greater than 20") 
}else{console.log("your number is something else")}

//or
const adad2 = 20 ; 
if (adad2 > 30 || adad2< 20) {
    console.log("ok")
}else{console.log("no ok ")}

//ternary operator 
const adad3 = 5;
adad3 == 10 ? console.log("your number is 10") : console.log("your number isnt 10")

console.log("-----------------------------")

//alert , prompt , confirm
// alert("in the name of god ")
// const sen = prompt("how old are you?")
// if (sen > 18) {
//    const areYouOk =  confirm("you can open this site are you ready ?")
  
    
// }else {alert("you cant open this site")}

//switch
const vol  = 10 ; 
switch (vol) {
    case 10:
        console.log("sound is low ");
        break;
    case 20:
        console.log("sound is medium ");
        break;
    case 30:
        console.log("sound is high ");
        break;

    default:
        console.break("bad")
        break;
}
console.log("-----------------------------")
// loops 
let i ; 
for (let i = 1; i <= 10; i++) {
    console.log(i);
  if (i === 5) {
      console.log("you find   5");
      continue;
      console.log("haha");
      
  }
    }
    console.log("-----------------------------")
    //بریک دستور را ازونجا به بعد متوقف میکنه اما کنتینیو میبره از بالا دووباره شروع میکنه
    //while and do while 
    
    let xix = 7 ; 
    while (xix<=10) {
        console.log(xix);
        xix++;
    }
    console.log("-----------------------------")
    
    let ziz = 30 ; 
do {
        console.log(ziz);
        ziz++;
} while (ziz <=20);
// تفاوت وایل و دو وایل در این است که در اولی اگر شرط برقرار نباشه دستور اجرا نمیشه اما  در دومی یکبار اجرا میشه دیگه نمیشه 

console.log("-----------------------------")
//functions

const funArray = [20 , 18 , 12 , 10]

function sum(fun) {
let ek = 0 ; 
    for (let i = 0; i < fun.length; i++) {
      ek += fun[i];  
    }
    let hesabed = ek /  fun.length
    if (hesabed > 15) {
        console.log("قبول شدی ");
    }
    else{console.log("قبول نشدی");}
    console.log(hesabed)

  }
  sum(funArray);

  console.log("-----------------------------")

  function jam(x , y , z=70) { 
        const jamshode = (x + y) *z
        return jamshode;

   }

  const hesab= jam(50 , 30 ,);
  console.log(hesab);

  console.log("-----------------------------")

  const newFun = function raz(text) { 
    console.log(`hello i want to tell you a secret ${text} all one`);
   }
  newFun("we are");

  console.log("-----------------------------");
  
  //IIFE فانکشن هایی که نیاز به صدا زدن برای اجرا ندارند
  //به فانکشن هایی که نام ندارند را انونیموس فانکشن میگویند
  (function () { 
      console.log("hhhhhhiiiiii!!!!!!");
   })();

   //