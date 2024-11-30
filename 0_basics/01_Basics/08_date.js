// Date : Date is an object in javascript. 
// JavaScript stores dates as number of milliseconds since January 01, 1970

// Dates  are many methods are availables

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getMonth());
console.log(myDate.getDay());
console.log(myDate.getMilliseconds());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);   // we see the date is object

// let myCreatedDate = new Date(2023, 0, 23)  // Here we declare the format of the date
// // let myCreatedDate = new Date(2023,0,23,5,3)
// let myCreatedDate =new Date ("2023-01-14")

let myCreatedDate =new Date ("01-14-2023")

// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp)

// console.log(myCreatedDate.getTime())  // for date compare

//console.log(Date.now());  // comparing in milisecond\

//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth()+ 1);

// `${newDate.getDay()} and the time `   //for string interpolation

newDate.toLocaleString('default', {
    weekday: "long",
    // timeZone :
})