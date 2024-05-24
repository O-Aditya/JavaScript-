// If statement in javascript

// if (true) {
//     console.log("Welocme to the website");
// } else {
//     console.log("This is false");
// }

// nested if statement

const isuserverified = true;
const isuserloggedin = true;
const isuseremailverified = true;
const isuserphoneverified = false;

if (isuserloggedin) {
    console.log("Welcome to the website");

    if(isuserverified && (isuseremailverified || isuserphoneverified)) {

        console.log("You can access all the features of the website");
    } else {
        console.log("Please verify your email");
    }
} else {
    console.log("Please log in");
}

//truthy and falsy values
// falsy values are undefined, null, 0, '', NaN , {} , false

// truthy values are '0', ' ', [], 

//  if array is empty
const array = [];
if(array.length == 0){
    console.log("Array is empty");
} 
//if object is empty
const obj = {};
if(Object.keys(obj).length == 0){
    console.log("Object is empty");
}
    

// nullish coalescing operator
// It is used to check the null or undefined values.
// It is denoted by ??


const val = null ?? 5;
console.log(val); // 5


