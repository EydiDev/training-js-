const DATA = [
{name: "milad" , marks : [10,9,12,2,20]},
{name: "ali" , marks : [11,14,9,13,17]},
{name: "david" , marks : [3,13,17,14,12]},
{name: "thomas" , marks : [4,5,16,20,19]},
{name: "saman" , marks : [11,4,16,7,13]},
{name: "mehran" , marks : [11,14,16,13,13]},
{name: "hamed" , marks : [1,4,6,3,13]},
];
const newDATA= DATA.map((item) => { 
    const sum = item.marks.reduce((acc , cur) => acc + cur , 0)
    //console.log(sum);
    const moadel = sum / item.marks.length;
    item.rate = moadel ; 
    if (item.rate>=10) {
        console.log(`${item.name}'s rate is ${item.rate}`);
    
    }
    return item; 

})

console.log(newDATA);


console.log("--------------------------------")