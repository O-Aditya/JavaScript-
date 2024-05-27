//for loop in javascript

const array = [1, 2, 3, 4];

for (let index = 0; index < array.length; index++) {
    
  //  console.log(array[index]);
    
}

//froEach loop in javascript

const names = ['Alice', 'Bob', 'Charlie', 'Deborah'];

names.forEach( function(name) {
   // console.log(name);
})


//forEach in object 

const coding =[
    {
        language: 'javascript',
        framework: 'React'
    },
    {
        language: 'python',
        framework: 'Django'
    },
    {
        language: 'java',
        framework: 'Spring'
    }
]

coding.forEach( (item) => {
    
  //  console.log(`Language: ${item.language} and Framework: ${item.framework}`);
    

})

// filter in javascript

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNum = numbers.filter( (num) => num % 2 === 0);

// const evenNum = numbers.filter( (num) => {
//     return num % 2 === 0;
//})

console.log(evenNum);
  
