// score grading tool;

/* 
 A = 90 and above :
 B = 80 and below 90;
 C=  70 and below 80:
 */
 userScore = Number(prompt("enter our marks"));

 switch (true) {
   case userScore >= 90:
     alert("you have A grade");
     break;
   case userScore >= 80 && userScore < 90:
     alert("you have B grade");
     break;
   case userScore >= 70 && userScore < 80:
     alert(" you have C grade ");
     break;
   case userScore >= 60 && userScore < 70:
     alert(" you have D grade ");
     break;
   default:
     alert(" you have F grade ");
     break;
 }
//  if else , efelseif, switch case(ES5)
//  TERNARY OPERATOR (ES6)

const un = prompt("Enter your name ");
un === "nischal" ? alert("welcome admin "): alert("welcome user");
// condition ?true : false 
const gender= prompt("enter your gender");
gender ==="m" ? alert("male"): gender === "f" ? alert ("female"): alert("other");