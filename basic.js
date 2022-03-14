console.log('This is basic of TypeScript');
var nuber1 = 10;
console.log('the number is', nuber1);
// Type Annotations on Variables ===============================
console.log("Type Annotations on Variables");
var myName = " Sajib Hosen"; // on declearing string all the string function being avalable to use with it
console.log(myName.toLowerCase());
console.log(myName.toUpperCase());
// Parameter Type Annotations ==================================
console.log("Parameter Type Annotations");
function sayHi(name) {
    console.log('hi ' + name.toUpperCase() + " This is from Function");
}
sayHi("sajib");
//Return Type Annotations =====================================
function doSum(num1, num2) {
    return num1 + num2;
}
console.log(doSum(23, 45));
