// Basic TypeScript => https://www.typescriptlang.org/docs/handbook/2/basic-types.html  
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//this is for testing ==========================================
console.log('This is basic of TypeScript');
var nuber1 = 10;
console.log('the number is', nuber1);
// Type Annotations on Variables ===============================
var myName = " Sajib Hosen"; // on declearing string all the string function being avalable to use with it
console.log(myName.toLowerCase());
console.log(myName.toUpperCase());
// Parameter Type Annotations ==================================
function sayHi(name) {
    console.log('hi ' + name.toUpperCase() + " This is from Function");
}
sayHi("sajib");
//Return Type Annotations ======================================
function doSum(num1, num2) {
    return num1 + num2;
}
console.log(doSum(23, 45));
// The primitives: string, number, and boolean  => https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Type Annotations on Variables   
var myName1 = "Sajib Hosen sajib.201h@gmail.com";
var myNumber = 307;
var myBiilian = true;
// Parameter Type Annotations 
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
greet("Maddison", new Date());
// Return Type Annotations
var doMultiply = function (firstNumber, secondNumber) {
    return firstNumber * secondNumber;
};
var mulOf = doMultiply(50, 23);
console.log(mulOf);
// Anonymous Functions
// No type annotations here, but TypeScript can spot the bug
var names = ["Alice", "Bob", "Eve"];
names.forEach(function (eachName) {
    console.log(eachName.toString());
});
// Object Types  & Optional Properties (?)
// Object types can also specify that some or all of their properties are optional.
//  To do this, add a ? after the property name:
function fruitsColor(fColors) {
    console.log('Mango is ' + fColors.mango.toUpperCase() + " and it is " + fColors.mRate);
    console.log('Orange is ' + fColors.orange + " and it is " + fColors.oRate);
}
fruitsColor({ mango: "Green", orange: "Orange", mRate: 80, oRate: 180 });
// Union Types !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// =======================================================
// TypeScript’s type system allows you to build new types out of existing ones using a large 
// variety of operators. Now that we know how to write a few types, it’s time to start combining
//  them in interesting ways.
function userIdU(id) {
    console.log("user Id:", id);
}
userIdU(30928);
userIdU("289748");
// Union Types > naroowing
function userId(id) {
    if (typeof id === "string") {
        console.log("user Id:", id.toUpperCase());
    }
    else {
        console.log("user Id:", id.toFixed());
    }
}
userId(098765543);
userId("849728");
function showPersonDetails(person) {
    console.log('person name: ', person.name);
    console.log('person age: ', person.age);
    console.log('person village: ', person.village);
    console.log('person height: ', person.height);
}
showPersonDetails({ name: "sajib hosen", age: 19, village: "charipara", height: 5.9 });
var boysDetails = function (boys) {
    console.log("boys Name: ", boys.name, "Age: ", boys.age, "isMarrige ", boys.isMarrige);
};
var newUser = {};
function printText(s, alignment) {
    console.log(s, alignment);
}
printText('this is testing text', "left");
function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
console.log(compare("0", '5'));
// Literal Inference >>> https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
