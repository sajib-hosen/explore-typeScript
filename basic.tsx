// Basic TypeScript => https://www.typescriptlang.org/docs/handbook/2/basic-types.html  
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//command for compiling >>>>  npx tsc basic.tsx


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


// The primitives: string, number, and boolean  => https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Type Annotations on Variables   
const myName1 : string = "Sajib Hosen sajib.201h@gmail.com";
const myNumber: number = 307;
const myBiilian: boolean = true;

// Parameter Type Annotations 
function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet("Maddison", new Date());


// Return Type Annotations
const doMultiply = (firstNumber: number, secondNumber: number):number =>{
    return firstNumber * secondNumber;
}
const mulOf = doMultiply(50, 23)
console.log( mulOf )

// Anonymous Functions

// No type annotations here, but TypeScript can spot the bug
const names = ["Alice", "Bob", "Eve"];
names.forEach((eachName)=>{
    console.log(eachName.toString())
})




// Object Types  & Optional Properties (?)
// Object types can also specify that some or all of their properties are optional.
//  To do this, add a ? after the property name:

function fruitsColor(fColors: {mango: string, orange?: string, mRate: number, oRate?: number}): void {
    console.log('Mango is ' + fColors.mango.toUpperCase() + " and it is " + fColors.mRate)
    console.log('Orange is ' + fColors.orange + " and it is " + fColors.oRate)
}

fruitsColor({mango: "Green", orange: "Orange", mRate: 80, oRate: 180})


// Union Types !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// =======================================================
// TypeScript’s type system allows you to build new types out of existing ones using a large 
// variety of operators. Now that we know how to write a few types, it’s time to start combining
//  them in interesting ways.


function userIdU( id: string | number ): void {
    console.log("user Id:", id)
}
userIdU(30928)
userIdU("289748")


// Union Types > naroowing
function userId( id: string | number ): void {
    if(typeof id === "string"){
        console.log("user Id:", id.toUpperCase())
    }
    else{
        console.log("user Id:", id.toFixed())
    }
}
userId(098765543)
userId("849728")



// ========================================================
// Type Aliases !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// We’ve been using object types and union types by writing them directly in type annotations.
//  This is convenient, but it’s common to want to use the same type more than once and refer 
//  to it by a single name.

type personPara = {  // type, type use "=" equal sign
    name: string,
    age: number,
    village: string,
    height: number
}

function showPersonDetails (person : personPara):void {
    console.log('person name: ', person.name)
    console.log('person age: ', person.age )
    console.log('person village: ', person.village)
    console.log('person height: ', person.height)
}

showPersonDetails({name: "sajib hosen", age: 19, village: "charipara", height: 5.9});

interface boysParams {  // An interface declaration is another way to name an object type:, interface does not need to equal sign,
    name: string,
    age: number,
    isMarrige: boolean
}

const boysDetails = ( boys: boysParams ) : void =>{
    console.log("boys Name: ", boys.name, "Age: ", boys.age, "isMarrige ", boys.isMarrige )
}

// Differences Between Type Aliases and Interfaces >>>>>>>>
// Type aliases and interfaces are very similar, and in many cases you can choose between them freely.
// Almost all features of an interface are available in type, the key distinction is that a type "cannot"
//  be re-opened to add new properties vs an interface which is always extendable.

// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html ==== ??????????


// Type Assertions 
// Sometimes you will have information about the type of a value that TypeScript can’t know about.

interface User {
    name: string,
    email: string
}
const newUser = {} as User;

function printText(s: string, alignment: "left" | "right" | "center") {
    console.log(s , alignment)
}
printText('this is testing text', "left" )


function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1;
}
console.log( compare("0", '5') )

// Literal Inference >>> https://www.typescriptlang.org/docs/handbook/2/everyday-types.html


// Narrowing ===========================================
 console.log('Narrowing ============================');

 function leftPadding ( padding: number | string, input: number){
     if(typeof padding === 'number'){
         return ' '.repeat( padding ) + input;   // "string".repeat(times) >> repeat the string for given times
     }
     return padding + input;
 }

//  typeof values >> "string" "number" "bigint" "boolean" "symbol" "undefined" "object" "function"


function printAll( strs: string | string[] | null ){
    if( strs && typeof strs === "object"){
        for( const s of strs){
            console.log( s )
        }
    }
    else{
        console.log( strs )
    }
}

printAll(["sajib", "Ratin", "Rafin", "Alhadi", "Alamin", "Fahim"])