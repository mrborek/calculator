
import Calculator from "./index.ts";

const calculator = new Calculator({precision: 2})

const num1 = 5;
const num2 = 3;

const results = {
    add: calculator.add(num1,num2).getTotal(),
    subtract: calculator.subtract(num1,num2).getTotal(),
    multiply: calculator.multiply(num1,num2).getTotal(),
    divide: calculator.divide(num1,num2).getTotal(),
}

console.log(num1, num2, results)

const calc2 = new Calculator({precision: 2})

calc2.add(3,3).add(4, 6).subtract(5).multiply(5).divide(2)

console.log('calc2.total', calc2.total)
