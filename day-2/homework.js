const time = Number(prompt("what is your time? select between 1 to 6"));
const classCondition = time >= 1 || time < 6;
if (classCondition) {
  alert("Class is in session");
} else {
  alert("class is not in session");
}
