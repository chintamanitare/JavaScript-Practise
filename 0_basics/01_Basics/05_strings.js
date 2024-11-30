const name = "chintamani"
const repoCount = 15

// console.log(name + repoCount + " value");   //Dont use this like syntax this is outdated

console.log(`Hello My name is ${name} and my repo count is ${repoCount}`);
//This is the modern way to write a syntax (string interpolation)

const gameName = new String ('Free-Fire')

console.log(gameName[0]);
console.log(gameName.__proto__);    // Strings are many methods are availables

console.log(gameName.length);         // Some Methods
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));

console.log(gameName.indexOf('i'));  // which position

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-5, 4)  // here we also gives negatives values
console.log(anotherString);

//     Trim
const newStringOne = "      chintamani     "
console.log(newStringOne);
console.log(newStringOne.trim()); // Remove starting space and ending space when use trim

//     Replace
const url = "https://chintamani.com/chintamani%20tare"

console.log(url.replace('%20', '-'))  // now replace the url things

console.log(url.includes('chintamani'))   // we also ask the questions any name are present are not
console.log(url.includes('laxman'))

//     split method  
console.log(gameName.split('-'));        // need seperator like '-'


// whenever you want to show all of the string method goes to inspect console 
// and write string {'chintamani'} and after you see result



