const name = "sandeep";
const repoCount = 50;

//console.log(name + repoCount + "Value");

//console.log(`hello my name is ${name} and my repoCount is ${repoCount} !`);

const gameName = new String("sandeep-03-gmail-com");

//console.log(gameName[0]);
//console.log(gameName.__proto__);
//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));
//console.log(gameName.indexOf("p"));

let newString = gameName.substring(0, 7);
//console.log(newString);

let anotherString = gameName.slice(0, 8);
console.log(anotherString);

//let spliceOne = gameName.splice(0, 7, []);
//console.log(spliceOne);

// let newStringOne = "     Sandeep    ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

// let url = "https://hitesh.com/hitesh%20choudhary";

// console.log(url.includes("hitesh"));
// console.log(url.replace("%20", "-"));

// console.log(gameName.split("-"));

//let invoice = "my-invoice01";
//console.log(invoice.at(-1));

const sentence = "the quick brown fix jumps over the lazy dog";
const word = "fox";
console.log(
  `the word "${word}" ${
    sentence.includes(word) ? "is" : "is not"
  } in the sentence`
);

let paragraph = "I think Ruth's dog is cuter than your dog!";
let searchItem = "dog";
let indexOfFirst = paragraph.indexOf(searchItem);
console.log(`the index of first "${searchItem}" is ${indexOfFirst}`);
