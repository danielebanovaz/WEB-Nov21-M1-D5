
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