// Always keep in mind How to we store the data and how to access it in Memory
// that's bases datas are two types one is premitive and second is Non-premitive

// Premetive
       // 7 types : string, Number, Boolean, Undefined, Null, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3445356644772n // bigInt

// Reference (Non Premitive)  (we get directly reference in memory)
        // Types : Arrays, Objects, Functions

//  All this non premitive datatypes are function and functions return are called Objectfunction 

const Animals = ["Tiger", "Lion", "Deer", "Elephant"];

let myObj = {
    name: "chintamani",
    age: 20,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof outsideTemp);