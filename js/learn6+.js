//import and export
import A, { name , family , nf ,age} from "../js/learn6.js";//nf = name family
console.log(name);
console.log(family);
nf()
console.log(age);
A(666,111)




//try catch learning

try {
    const h1 = document.querySelector("h21");
        h1.innerHTML="ya allah"
    }catch(error) {
        console.log("Error");
    }
console.log("-------------------");
//closure 
let num = 0 ;
function nam() {
    num++;
return num;
}
 
console.log( nam());
console.log( nam());
console.log( nam());
console.log( nam());
console.log("-------------------");
function nam2() { 
    num++;
    return num;
 }
 console.log( nam2());
 console.log( nam2());
 console.log( nam2());
 console.log( nam2());
console.log("-------------------");
 //در متغیر گلوبال وقتی ما در یک فانکشن ان متغیر را تغیر میدهیم متغیر کلا عوض میشود در اخر 
 function nam3() {
     let num2 = 0;
     num2++;
     return num2;
   }
   console.log( nam3());
   console.log( nam3());
   console.log( nam3());
console.log("-------------------");
   //متغیر لوکال هم هر بار که فانکشن تمام میشه دوباره از اول تعریف میشه و دیتای قبلی حذف میشه 
   //و با این دو طریق ما نمیتوانیم تعداد اجرا های هر فانکشن استفاده کنیم 
   //پس مجبوریم از closure استفاده کنیم


   function closure() { 
       let num3 = 0;
       function nam4() { 
           num3++;
           return num3;
        }
        return nam4;
    }
    const data = closure();

    console.log(data());
    console.log(data());
    console.log(data());
    console.log(data());
console.log("-------------------");

    const count = closure();
    console.log(count());
    console.log(count());
    console.log(count());
    console.log(count());
// end of closure 

//this keyword
const userData = {
    userName: "mamad",
    family : "eydi",
    sayHi : function () {
        console.log(`hi ${this.userName}`);
        console.log(this);
      }
}
userData.sayHi();

//class : a machine for create object-oriented
//function in class is method
//constructor mean is creator
class Car {
    constructor (name , speed , color) {
        this.name = name;
        this.color = color;
        this.speed = speed; 

    }
    sped (ss) {
        console.log(this.name);
        console.log(this.color);
        console.log(ss);
    }
}
const bmwCar = new Car("bmwX6" , "200kmh" , "white");
const dodgeCar = new Car("dodge Challenger" , "300kmh" , "black");
console.log(bmwCar);
bmwCar.sped();
console.log(dodgeCar);
dodgeCar.sped("200kmh");

