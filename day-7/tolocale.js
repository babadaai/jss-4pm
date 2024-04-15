console.log("day7");
const place ="Kathmanndu ";
console.log(`US-en:${place.toLocaleLowerCase(`EN-us`)}`);
const place2="kathmandu city";
console.log(place2.toLocaleUpperCase (`EN-us`));
// write a javascript function that checks if the user input take email is valid or not 
const valid = ()=> {
    let email=prompt("enter yout email");

    const regrex = new RegExp(/[a-zA-Z]/gm);
    if(regrex.test(email) === true){
        console.log("valid email");
    }
    else{
        console.log("you are not valid");
    }
}
valid();





