
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

