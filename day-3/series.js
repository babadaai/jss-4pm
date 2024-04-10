// wap to find the factorial of a number
const num1 = Number(prompt("Enter your number"));


let result = 1;
for (let i = 1; i <= num1; i++) {
    if (num1 === 0){
        result=1;
        result = result * i;
        break;

     }
    
  result = result * i;
  console.log(result);
}
alert("your factorial is " + result);
