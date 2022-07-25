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


//distructuring
const {namex , id , address} = data;
const {city , street } = address;

console.log(`hi ${namex} you live in ${city} in ${street} street `)

//الان  با یک خط کد سه متغیر ر, گرفتیم 