//import export
const name = "mohammad";
 const family = "eydi";
const age = 21;
const nf = () => console.log(name , family);

const A = (a,b) => console.log(a+b);
//this is Named 
export {nf , name , family ,age};
//Default
export default A;
