// Write a JavaScript program to compute the sum of the two given integers.
//  If the two values are the same, then return triple their sum
let num1 = Number(prompt("enter 1st number"));
let num2 = Number(prompt("enter 2nd number "));
if (num1 == num2) {
  var product = num1 * num1 * num1;
  alert("your result is " + product);
} else {
  var sum = num1 + num2;
  alert("your result is " + sum);
}
// Switch case
/*
switch (condition):
    case 1:
        alert("class has not started ");
        break;
    case 2:
            alert("class is in session");
            break;
        default:
            alert("Invalid task");
            break;
*/
const time = Number(prompt("what is your time? select between 1 to 6"));

switch (time) {
  case 4:
  case 5:
    alert("Class is session");
    break;
  case 1:
  case 2:
  case 3:
    alaert("class has not started");
    break;

  default:
    alert("invalid time ");
    break;
}
// score grading tool;

/* 
 A = 90 and above :
 B = 80 and below 90;
 C=  70 and below 80:
 */
userScore = Number(prompt("enter our marks"));

switch (userScore) {
  case userScore >= 90:
    alert("you have A grade");
    break;
  case userScore > 80 && userScore < 90:
    alert("you have B grade");
    break;
  case userScore > 70 && userScore < 80:
    alert(" you have C grade ");
    break;
  case userScore > 60 && userScore < 70:
    alert(" you have D grade ");
    break;
  default:
    alert(" you have F grade ");
    break;
}
