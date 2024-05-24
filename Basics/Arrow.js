//iife function
(function chai(){
    console.log('connected');
})();


//Arrow function
const demo = () => {
    console.log(this)
    
}
demo() // window object

//point to be noted
//Arrow function does not have its own this. It always refers to the parent object.
//Arrow function does not have arguments object. It uses the arguments object of its parent function.
//Arrow function does not have prototype property.
//Arrow function cannot be used as a constructor.




