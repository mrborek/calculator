
import Calculator from "./index.ts";

const calculator = new Calculator({precision: 2})

const num1 = 5;
const num2 = 3;

const results = {
    add: calculator.add(num1,num2),
    subtract: calculator.subtract(num1,num2),
    multiply: calculator.multiply(num1,num2),
    divide: calculator.divide(num1,num2),
}

console.log(num1, num2, results)
