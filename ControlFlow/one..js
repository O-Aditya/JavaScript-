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

    
