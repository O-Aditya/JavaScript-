//Object in Javascript

//Object is a collection of key-value pairs. It is a reference data type.

//Symbols and functions can also be used as keys in an object.

const Empl_id = Symbol('Emp_id'); // Symbol is a unique and immutable data type. It is used as an identifier for object properties.
const Employee = {

    [Empl_id] : 1,
    name : 'Eddi vincent',
    age : 20,
    role : 'Software Developer',
    Email : 'Eddi@google.com',
    location : 'Bangalore',
    Tech_Stack : ['Python', 'JavaScript', 'React', 'Node.js'],

};

Object.freeze(Employee.Email); // freeze() method is used to make the object immutable. It prevents the object from being modified.

console.log(Employee);
console.log(Employee.name); // Eddi
console.log(Employee['Email']); //
console.log(Employee.Tech_Stack); //
console.log(Employee[Empl_id]); // 1