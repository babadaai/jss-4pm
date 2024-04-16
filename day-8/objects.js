console.log("objects"); 
// objects 
const person= "ram";
// complex data type objects,array,date
// CRUD-create, read, update, delete
// Objects keyword  {}
const school = {
    name: "saint xavier's college ",
    estd: 2002,
    address: "maitighar",
    isCollege :true,
}
const car ={
    companyName:"Toyota",
    carVarient:"SUV",
    carPrice:2000000,
    carModel:"Prado",
    madeYear:2024 ,
    owner: {
        a:"nischal",
        b:"mainali",
    
    },
    age: function(){
        return 2024-2023;
    },
    old:()=>{
        return 2024-2023;
    },}
    // create
    // technique 1
    const box = new Object();
    // technique 2
    const boxes ={};
    // read 
    // we have to use dot notation 
    console.log(car.age(),car.carModel,car.carPrice);
    // update
    car.madeYear=2019;
     car.color="black";
     car.owner.b="nischal";
     console.log(car);
     // delete
     // 1 delete the entire objects
     // 2 delete the object properly
     delete car.owner.b;
     delete car;
    console.log (car);
    const teacher ={
        id:1102,
        name:"nischal",
        major:"math",
        dob:2002,
    
    
        age1: function (){
                return 2024-this.dob;

        },
        old1: ()=>{
            return 2024-this.dob;
        },
            
    }   
     console.log(teacher.age1());
    console.log(teacher.old2());

    








    




