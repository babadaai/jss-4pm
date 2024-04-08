console.log("day-2");
//  Data type
// string
const person = "ram";
let female = "sita";
const user = "nischal";
const user2 = ``; // backtick
console.log({ person, female, user, user2 });
var number = 20.0;
console.log({ number });
const pi = 3.14;
const num2 = 2;
const num3 = 3;
const isNepalbad = true;
const isNepalgood = false;
console.log({ isNepalbad, isNepalgood });
let text;
var text2;

console.log({ text, text2 });
const data = null;
console.log({ data });
// type coversion & type coersion
// method-1
const mul1 = prompt("enter 1st number");
const mul2 = prompt("enter 2nd number ");
const result = Number(mul1) + Number(mul2);
const stringOnly = String(mul2);

console.log({ result, stringOnly });
// method-2

const result2 = +mul1 + mul2;
console.log({ result2 });

// operator (logical operator )
//AND &&, OR || ,NOT !
const andCheck = mul1 && mul2;
const orCheck = mul1 || mul2;
const notCheck = !mul1;
console.log({ andCheck, orCheck, notCheck });

