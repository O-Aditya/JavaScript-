// Array in JavaScript

// Array is a collection of elements. It can store any type of elements. It can store elements of different types.

// Array is a special type of object in JavaScript. It is a reference type.

const Heroes = ['Iron', 'Thor', 'Hulk', 'Captain', 'Black Widow'];

console.log(Heroes); 

// Accessing elements of an array
console.log(Heroes[0]); // Iron

// Modifying elements of an array

Heroes[0] = 'Batman';

// Adding elements to an array
Heroes.push('Superman');

console.log(Heroes);

// Removing elements from an array

Heroes.pop(); // Removes the last element from the array

console.log(Heroes);

Heroes.shift(); // Removes the first element from the array

console.log(Heroes);

const Arr1 = [0,1,2,3,4,5];
const Arr2 = [6,7,8];

const Arr3 = Arr1.concat(Arr2); //concat() method is used to merge two or more arrays.

console.log(Arr3);

// Array methods

// 1. Array.isArray() method is used to check whether the given value is an array or not.

console.log(Array.isArray(Heroes)); // true

// 2. indexOf() method is used to find the index of the first occurrence of the given element in the array.

console.log(Heroes.indexOf('Thor')); // 1

// 3. lastIndexOf() method is used to find the index of the last occurrence of the given element in the array.

console.log(Heroes.lastIndexOf('Black Widow')); // 1

// 4. includes() method is used to check whether the given element is present in the array or not.

console.log(Heroes.includes('Hulk')); // true

// 5. join() method is used to join the elements of the array into a string.

console.log(Heroes.join(' --> ')); // Batman-Thor-Hulk-Captain-Black Widow

// 6. reverse() method is used to reverse the elements of the array.

// const Reverse = Heroes.reverse()
// console.log(Reverse);

// 7. slice() method is used to extract a part of the array.

console.log(Heroes.slice(1, 3)); // [ 'Hulk', 'Captain' ]

// 8. splice() method is used to add or remove elements from the array.
console.log( "A-->"+Arr1);
const N1 = Arr1.slice(1, 3);
console.log(N1);

console.log( "B-->"+Arr1);
const N2 = Arr1.splice(1, 3); // manipulates the original array
console.log("C-->"+Arr1);
console.log(N2);







