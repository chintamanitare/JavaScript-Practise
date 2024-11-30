
// Here are not any problem to conversion
// Best for conversion
console.log(1 > 1);
console.log(1 <= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

// Here are problem because datatypes are differents
console.log("2"> 1);
console.log("02" > 1);

// Here null when we do conversion Then sometime they convert null to 0.
// After they comparison then problem face
// Avoid this types of conversion This are confusing
console.log(null > 0);
console.log(null == 0);   // conversion null to 0
console.log(null >= 0);  

console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined > 0);

// === (strict check)

console.log(und)