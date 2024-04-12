
console.log("day-5 function");
// es5
function sum(a,b){
    return a+b;

}
const result = sum(2,3);
console.log(result);
// es6
const product =(a,b)=> {
   return a*b;
};

console.log(product(5,6));
//  write a js program to count age 
let birth=Number(prompt("Enter your birth year"));
const ageCalc=()=>{
    let present = 2024;
    return present-birth;
};
console.log("your age is "+ageCalc());
// write a program to calc simple interest 
const simple =(p,t,r)=>{
    return (p*t*r)/100;
}
let result2=simple(1000,2,10);
console.log({result2});


