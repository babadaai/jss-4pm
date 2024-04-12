// reverese a string using js

const reverse = (word) => {
  let newString = "";
  for (let i = word.length - 1; i >= 0; i--) {
    newString += word[i];
  }
  
  if( newString === word){
    return "it is pallindrome "+newString;

  }
  else{
  return "it is not a pallindrome " +newString;
  }
};
console.log(reverse("3210"));
// wap to print largest number in a sentence 

const largest = (sent) => {
  const words = sent.split(' ');
  let largestWord = "";
  for (let i = 0; i < words.length; i++) {
      if (words[i].length > largestWord.length) {
          largestWord = words[i];
      }
  }
  console.log("The largest word is: " + largestWord);
};

largest("My name is lakhan");





