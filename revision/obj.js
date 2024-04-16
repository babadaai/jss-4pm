//  Find the value of the price property and if it is greater than 100, discount it by 10%. 
// If that’s not the case, discount it by 7%. b. Update the object with the new
//  property - discount and the corresponding value (7% or 10%) and the new price.
const propertyRange={
    high: 100,
    low: 50,
   
    value:function(num) {
        if(num>this.high){
            let newNum= (num-(0.1*num));
            console.log("your old price is "+num);
            return newNum;
            

        } 
        else if(num<this.low){
            let newNum =(num-(0.07*num));
            console.log("your old price is "+num);
            return newNum;

        }

        console.log("your old price is "+num);
    }

};
console.log("your total is "+propertyRange.value(20));


let prod = {
    name: "headphones",
    price: 83.7,
    discount: "7%",
    endPrice: function(){
        const newDis= parseInt(this.discount)/100;
        const newPrice= (this.price-(this.price*newDis));
        return newPrice;
        

    }
    };
    
    
    console.log(prod.endPrice());
    
        
      