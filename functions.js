
// Remember that you need to DECLARE a function BEFORE you can use it
// (you'll get an error otherwise)

const writeHeader = function(title) {
    console.log(`\n------------------==[ ${title.toUpperCase()} ]==------------------`)
}

// THE LESSON ACTUALLY STARTED FROM DOWN HERE
// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

writeHeader("switch/case")

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
    default: greeting = `Nice to see you ${userName}!`; break
}

console.log(greeting)


writeHeader("ACCESSING STRING CONTENT")

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


writeHeader("SCOPE OF A VARIABLE")
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


var myDearOldVar = "Please, don't use me anymore. I'm super buggy"
// AVOID USING VAR. It's the old way to declare variables, and it makes a hell of mess with scopes. Don't use it. Please.

writeHeader("STRING MANIPULATION")
// More about string functions on : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String


writeHeader("TO UPPER/LOWER CASE")
let greetingYell = greeting.toUpperCase() // This will NOT change the original string (greeting)
console.log(greetingYell)

let greetingWhisper = greeting.toLowerCase()
console.log(greetingWhisper)

writeHeader("FINDING THE FIRST OCCURRENCE OF A CHARACTER OR SUBSTRING")

let indexOfAlberto = greeting.indexOf("Alb")
console.log(`'Alb' starts at index ` + indexOfAlberto)


writeHeader("GETTING A SUBSTRING")
let extractedName = greeting.slice(indexOfAlberto, indexOfAlberto + 7)
console.log(extractedName)

writeHeader("SPLIT A STRING INTO SEVERAL SUBSTRINGS")
let splittedString = greeting.split(" ")
console.log(splittedString)

writeHeader("JOINING THEM BACK")
let reJoinedString = splittedString.join("]-[")
console.log(reJoinedString)

writeHeader("CREATING OUR OWN FUNCTIONS")

const joinTwoStrings = function(firstString, secondString) {

    if ((firstString === undefined)||(secondString === undefined)){
        console.log("ERROR: please check your parameters:", firstString, secondString)
        return
    }

    let result = firstString + "---" + secondString
    return result
}

console.log("We're almost finished")

let output = joinTwoStrings("Ali", "Matt")
output = output.toUpperCase()
console.log(output)

joinTwoStrings("Martin", "Luca")
joinTwoStrings("Farrukh", "Gbemi")
output = joinTwoStrings("Julita", 79)
console.log(output)