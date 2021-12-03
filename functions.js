
console.log("------------------ SWITCH/CASE ------------------")

let userName = "Alberto"
let greeting

/*if (userName === "Ali") {
    greeting = "Good morning, Ali!"
} else if (userName === "Luca") {
    greeting = "Buongiorno Luca!"
} else if (userName === "Matt") {
    greeting = "Hello Matt!"
} else if (userName === "Julita") {
    greeting = "Hej Julita!"
} else if (userName === "Gbemi") {
    greeting = "Moi Gbemi!"
} else {
    greeting = `Hi ${userName}!`
}*/

switch (userName) {
    case "Ali": greeting = "Good morning, Ali"; break
    case "Luca": greeting = "Buongiorno Luca!"; break
    case "Matt": greeting = "Hello Matt!"; break
    case "Julita": greeting = "Hej Julita!"; break
    case "Gbemi": greeting = "Moi Gbemi!"; break
    default: greeting = `Hi ${userName}!`; break
}

console.log(greeting)


console.log("------------------ ACCESSING STRING CONTENT ------------------")

let helloStriversString = "Hello Strivers" // We can think of strings as if they were ARRAYS OF CHARACTERS
            // Index:      0123456789... <--- As in arrays, these are zero-based indexes for accessing individual characters

console.log("The seventh character of this string is", helloStriversString[6])

let expandedString = ""
for (let i = 0; i < helloStriversString.length; i++) {

    let currentCharacter = helloStriversString[i]

    if (currentCharacter === " ") {
        break
    }

    if (currentCharacter === "l") {
        continue
    }

    console.log(currentCharacter)

    expandedString += currentCharacter
    expandedString += " "
}

// H e l l o   S t r i v e r s
console.log(expandedString)


console.log("------------------ SCOPE OF A VARIABLE ------------------")
// A variable will only exist within its own SCOPE (= its BLOCK OF CODE / its ENCLOSING CURLY BRACKETS)

//if (true)
//for (let antherScopedVariable = 0; antherScopedVariable < 10; antherScopedVariable++)
//else
//while (do)
{
    let scopedVariable = "Hey, I'm a scoped variable: I will only exist inside my enclosing block of code"
    console.log(scopedVariable)
} // As soon as we leave this BLOCK OF CODE { ... }, ALL the variables declared INSIDE of it will DISAPPEAR

// console.log(scopedVariable) <---- This line here will throw an error: ReferenceError: scopedVariable is not defined

// --------- LET vs CONST ---------
let myEverchangingVariable = "First value"
// ...
myEverchangingVariable = "Second value"
// ...
myEverchangingVariable = "Third value"

const myFixedVariable = "Initial value"
// ...
// myFixedVariable = "Another value" <---- This line here will throw an error: TypeError: Assignment to constant variable.

// USAGE:
// - when we need a value to be IMMUTABLE (IE: in math-related program, we want to define a value for PI: const will make sure nobody is replacing that value)
// - for PERFORMANCE reasons: const will use LESS MEMORY than let. Use const if you know in advance that this value is not going to change

const studentObject = {
    firstName: "Gordon",
    lastName: "Freeman"
}

studentObject.firstName = "Morgan" // CONST DOES NOT prevent me to modify the properties of an OBJECT
console.log(studentObject.firstName)

//studentObject = {} // It only prevents REASSIGNING that variable to another object (or string/number/bool...)
// Same applies to arrays: I can change the content of them, but not REASSIGN the variable to something else
