//datatype in javascript 
// 1. Primitive data type
// 2. Non-primitive data type

// Primitive data type
// 1. String
let user_name = "harry";
console.log("My string is " + user_name);
console.log("Data type is " + (typeof user_name));

// 2. Numbers
let marks = 34;
console.log("Data type is " + (typeof marks));

// 3. Boolean
let isDriver = true;
console.log("Data type is " + (typeof isDriver));

// 4. Null
let nullVar = null; // standalone value
console.log("Data type is " + (typeof nullVar));

// 5. Undefined
let undef = undefined;
console.log("Data type is " + (typeof undef));


// Non-primitive data type
// 1. Arrays
let myarr = [1, 2, 3, 4, false, "string"];
console.log("Data type is " + (typeof myarr));
console.log(myarr);

// 2. Object literals
let stMarks = {
    harry: 89,
    Shubham: 36,
    Rohan: 34
}
console.log(stMarks.Rohan);


// 3. Functions
function findName() {
    
}
console.log("Data type is " + (typeof findName));

// 4. Dates
let date = new Date();
console.log("Data type is " + (typeof date));
console.log(date);

// 5. Regular Expressions
let re = /harry/;
console.log("Data type is " + (typeof re));

// 6. Symbol
let sym = Symbol();
console.log("Data type is " + (typeof sym));

