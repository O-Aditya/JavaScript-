//iife function
(function chai(){
    console.log('connected');
})();


//Arrow function
const demo = () => {
    console.log(this)
    
}
demo() // window object



