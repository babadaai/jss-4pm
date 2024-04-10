console.log("DAY-4");
// function
/*
1 step= function define
2. variable pass
3. function call
*/
// write a funtion that says hi to user
// es5
function hi(user) {
  const hello = `Hi, ${user}`;
  return hello;
}
const result = hi("nischal");
console.log({ result });
// es6
const hii = (firstName, lastName) => {
  return `Hi, ${firstName},${lastName}`;
};
const result1 = hii("nischal", "mainali");
console.log({ result1 });
// wap to add two num from asking from user
let num1 = Number(prompt("enter 1st num"));
let num2 = Number(prompt("enter 2nd num"));

const sum = (num1, num2) => {
  const result = num1 + num2;
  return `result ${result}`;
};
const ans = sum(num1, num2);
console.log(ans);
// write a js function that takes user name andd pw
// if userName === "nischal" && password === "your pw" 
// welcome admin
// nischal, nischal
// welcome user 
// else invalid user 
// qn 2. wap with function to solve factorial of 5 (if possible try recursive function)
const login = () => {
  const userName = prompt("Enter your username:");
  const password = prompt("Enter your password:");
  
  if (userName === "nischal" && password === "nepal123") {
      alert("Welcome admin");
  } else if (userName === password) {
      alert("Welcome user");
  } else {
      alert("Invalid user");
  }
}
 
  login();
