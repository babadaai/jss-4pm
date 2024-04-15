// write a JavaScript program to count the number of vowels in a given string
const vowel =()=>{
    const str = "apple";
    let char =str.split('');
    let count =0;
    for (let i=0;i<=str.length;i++){
        if(char[i] === 'a' ||char[i] === 'e'||char[i] ==='i'||char[i] ==='o' ||char[i] ==='u'  ){
            count=count+1;
        }
        
    }
    console.log(count);



};
// write a js function to change "nischal mainali " to "Nischal Mainali"
const capitalizeWords = function(str) {
    return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
};

const name = "nischal mainali";
const capitalized = capitalizeWords({name});
console.log(capitalized);
