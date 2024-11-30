let score = "22abc" 

// console.log(typeof score)
// console.log(typeof(score))

let valueInNumber = Number(score)  // Here we convert value string to the number
// console.log(typeof valueInNumber)
// console.log(valueInNumber) // NaN (Not a Number)

// "22"  => 22
// "22abc" => NaN
//  true => 1; false => 0

let isLoggedIn = 1

let booleanisLoggedIn = Boolean(isLoggedIn)
// console.log(booleanisLoggedIn);

// 1 => true; 0 => false
// "" => false
// "chintamani" => true

// let stringNumber = String(someNumber)
// // console.log(stringNumber)
// console.log(typeof stringNumber)

// ******************** OPERATIONS ***************************

let value = 3
let ngValue = -value
// console.log(ngValue);

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2/2)
// console.log(2**2)
// console.log(2%3)

let str1 = ("Hello")
let str2 = (" Chintamani")
let str3 = (str1 + str2)

// console.log(str3);
// console.log(typeof str1  )

// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + 2 + 2)
// console.log(1 + 2 + "2")

// console.log((1 + 2) * 4 % 3); // Use Paranthesis

console.log(+true)
console.log(+"")

let num1, num2, num3

num1 = num2 = num3 = 2 + 2
console.log(num1, num2, num3)

let gameCounter = 100
gameCounter++; // prefix and Postfix
console.log(gameCounter);