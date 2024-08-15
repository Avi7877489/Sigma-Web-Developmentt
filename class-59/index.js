let random = Math.random()
console.log(random)
let a = prompt("Enter First Number: ")
let b = prompt("Enter Second Number: ")
let c = prompt("Enter Operator: ")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "*",
}
if (random > 0.1) {
    // Perform correct calculation
    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is: ${eval(`${a} ${c} ${b}`)}`)

}

else {
    // Perform wrong calculation
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`) 

}