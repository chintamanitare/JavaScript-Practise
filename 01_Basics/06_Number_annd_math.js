const score =  400
 console.log(score);
 console.log(typeof(score));

const balance = new Number(100)  // Here we define new object and theire type is number
console.log(balance);

// ********** Practise Some Methods ***********

console.log(balance.toString());  // This convert numbers to Strings

console.log(balance.toString().length); // Now this is converted to the string so we get some addition methods of strings
console.log(balance.toFixed(2));

const otherNumber = 123.8933
console.log(otherNumber.toPrecision(3));   // Gives the Round off values , exponsion

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-In'));  // Gives the number in commas (,) representives in US standars  // when use en-IN thrn indian standard represents

//  **************** Maths *******************

 console.log(Math);

 console.log(Math.abs(-4));   // Gives You Round Off Values
 console.log(Math.round(4.3));
 console.log(Math.ceil(4.2));  
 console.log(Math.floor(4.9));  // Always round-off minimum

 console.log(Math.min(4,5,3,7));    // for finding a small value
 console.log(Math.max(2,3,6,4,7));      // for finding minimum value

//     Random 

console.log(Math.random());   //  math.random values are always get between 0 and 1 | like 0.1, 0.4 etc
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);  //Floor for round-off values

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)