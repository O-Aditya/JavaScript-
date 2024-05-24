//Functions In JavaScript

function Welcome(username){
    return `Welcome ${username}`;   //returning the string
}

console.log(Welcome('Eddi')); // Welcome Eddi

// This in JavaScript

const User = {
    name : 'Eddi',
    age : 20,
    role : 'Software Developer',
    Email : 'eddi@gmail.com',

    //Method
    getUserDetails(){
        console.log(this); // User object
        return `Name is ${this.name}, age is ${this.age}, role is ${this.role}, Email is ${this.Email}`;
    }
}

console.log(User.getUserDetails()); 
User.name = 'Mike';
User.Email = 'Mike@gmail.com'
console.log(User.getUserDetails());