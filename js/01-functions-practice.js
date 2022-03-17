//STEP 1
// Write a function called halfNumber() that accepts one argument (a number), divide it by 2, and return the result. It should log a string like "Half of 5 is 2.5.".

// function halfNumber(numbers) {
//     let result = numbers / 2
//     console.log(`Half of ${numbers} is ${result}`)
// }
// halfNumber()
// halfNumber(6)
// halfNumber(38)


//STEP 2
// Write a function called squareNumber() that accepts one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

// function squareNumber(aNumber) {
//     let result = Math.pow(aNumber, 2)
//     console.log(`Half of ${aNumber} is ${result}`)
// }
// squareNumber()
// squareNumber(6)
// squareNumber(38)


//STEP 3
// Write a function called percentOf() that accepts two numbers, figure out what percent the first number represents of the second number, and return the result. It should log a string like "2 is 50% of 4."

// function percentOf(firstNumber, secondNumber) {
//     let modulus = firstNumber / secondNumber / Math.pow(10, -2)
//     console.log(`${firstNumber} is ${modulus}% of ${secondNumber}`)
// }

// percentOf()
// percentOf(5, 10)
// percentOf(100, 4000)


//STEP 4
// Write a function called findModulus() that accepts two numbers. Within the function write a statement that returns the modulus of the first and second parameters. It should log a string like "2 is the modulus of 4 and 10."

// function findModulus(firstNumber, secondNumber) {
//     let modulus = secondNumber % firstNumber
//     console.log(`${modulus} is the modulus of ${firstNumber} and ${secondNumber}`)
// }

// findModulus()
// findModulus(4, 10)
// findModulus(8, 20)


//STEP 5
// Create a JavaScript function that accepts a certain amount of numbers as parameters. Those numbers should be collected using a prompt and the numbers should be delimited by commas. Once the values are collected, find the sum of all of the numbers combined. You will need to use a function, loop, arguments object, and several type conversion global functions to accomplish this task.

function sumOfAll(numbers) {
    
}

function sumOfAll(numbers) {
    prompt('Please enter numbers to be added')
    let base = 0;
    for (let i = 1; i < arguments.length; i++) {
        base += Number(arguments[i]);
    }
    console.log(base);
}
sumOfAll();