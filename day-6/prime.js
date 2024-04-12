
const primeNum =(num1) =>{
    for (let i=2; i<num1;i++){
        if ( num1%i === 0){
            return("not prime")
         
        }
        else {
            return("Prime")
        }
    } 
}
console.log(primeNum(6));
//  write a js function thaat converts a long sentence to '...' statement
// truncate function 

const truncate=(sentence )=> sentence.substring(0,8).concat(".....");
console.log(truncate( 

    "nischal mainali 123423424  "
)
);
// anonymous function 
const sayHi = functon (){};
// IIFE immediate invoked functionaal expression
( function () {
    console.log ("hey1");
    console.log ("hey12")
    console.log ("hey3")
    console.log ("hey4")
})();
// closer 
//  pure function 
//  call back function 


