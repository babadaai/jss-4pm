
let range = {
    start: 10,
    end: 50,
    
number:function (num){
    
    if(this.end-num <0 || num-this.start <0){
        return false;
    }
    else{
        return true;

    }

}
};
console.log(range.number(80));
console.log(range.number(18));
