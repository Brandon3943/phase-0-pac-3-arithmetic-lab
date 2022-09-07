let x = Math.floor(Math.random() * 1000)


//add
function add(a,b) {
    return a + b;
}

console.log(add(x,x))

//subtract
function subtract(a,b) {
    return a - b;
}

console.log(subtract(x,x))

//multiply
function multiply(a,b) {
    return a * b;
}

console.log(multiply(x,x))

//divide
function divide(a,b) {
    return a / b;
}

console.log(divide(x,x))

//increments
function increment(n) {
    return n + 1;
}

console.log(increment(x))

//decrements
function decrement(n) {
    return n - 1;
}

console.log(decrement(x))

//makeInt
let n = "2.222"

function makeInt(n) {
    return parseInt(n, 10)
}

console.log(parseInt(n, 10))

//preserveDecimal

function preserveDecimal(n) {
    return parseFloat(n, 10)
}

console.log(preserveDecimal(n, 10))
