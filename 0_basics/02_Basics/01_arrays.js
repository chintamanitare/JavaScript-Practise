
//  Array

// => Array is a non-primitive data types. 
// => It is used to store multiple items under a single varible. 
// => Javascripts arrays are resizable 
// => JavaScripts arrays are also contain a mix of different data types.

// => slice() does not manupulate main array.
// => splice() manupulate original array.

// => JavaScript array-copy operation create shallow copies.
           // Shallo copy = object is a copy whose properties share the same references 
                             // as those of the source object from which the copy was made.
                             // means whatever we change in array automatically change in reference array also

            // Deep copy =   Do not share the same references

const myArr = [0,1,2,3,4,5,6,true,"chintamani"]  // mix datatypes store
// console.log(myArr)

console.log(myArr[0]);   // this way to we access the array first element are start with 0.


// ******************** Arrys Basics ***********************

const myNewArray = [0, 1, 2, 3, 4, 5]
const iplTeams = ["Bengaluru", "Chennai", "Mumbai", "Kolkata", "Rajsthan","Gujrat", "Delhi", "Lucknow"];
const myArr2 = new Array (1,2,3,4,5)

// ******************** Arrays Methods ***********************

myNewArray.push(6)      // Here we pushed in the arrys 6 value means we added value in myNewArray
// console.log(myNewArray);

myNewArray.pop()         //  Here remove the last value of Array
// console.log(myNewArray);

myNewArray.unshift(9)     //  Here Values are added in front of the 0 in starting
// console.log(myNewArray);

myNewArray.shift()      // Remove the front value of zero at starting      
// console.log(myNewArray);

// ******************** Arrays Some Questioners Methods ***********************

console.log(myNewArray.includes(9));   // Asking Question value are available or Not
console.log(myNewArray.indexOf(8));   // showing index number

const newArry = myNewArray.join()   // All values are converts to the Strings
console.log(myArr);
console.log(typeof newArry);

//  ******************** Slice & Splice Methods *******************************

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3)    // Print only 1 to 3 values But Range are not Including
console.log(myn1)
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)   // Range are including Here
console.log("C ", myArr);       // Splice are Arrays are changing here range between section are removed
console.log(myn2);






