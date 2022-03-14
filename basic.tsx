//this is for testing ==========================================
console.log('This is basic of TypeScript');
const nuber1 = 10;
console.log('the number is', nuber1 )

// Type Annotations on Variables ===============================
const myName : string = " Sajib Hosen" // on declearing string all the string function being avalable to use with it
console.log(myName.toLowerCase())
console.log(myName.toUpperCase())


// Parameter Type Annotations ==================================
function sayHi ( name: string){
    console.log('hi ' + name.toUpperCase() + " This is from Function")
}
sayHi("sajib")


//Return Type Annotations ======================================
function doSum (num1: number, num2: number): number{
    return num1 + num2
}
console.log(doSum(23, 45))
