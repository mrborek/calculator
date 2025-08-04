interface CalculatorOptions{
    precision?: number
}

export default class Calculator{
    precision:number|undefined = undefined

    constructor(options? :CalculatorOptions){
        if(options?.precision)
            this.precision = options?.precision
    }


    add(a: number, b: number){
        return this.precision ? (a + b).toFixed(this.precision): a + b
    }

    subtract(a: number, b: number){
        return this.precision ? (a - b).toFixed(this.precision): a - b
    }

    multiply(a: number, b: number){
        return this.precision ? (a * b).toFixed(this.precision): a * b
    }

    divide(a: number, b: number){
        if(b === 0){
            throw new Error('Error: division by zero is not allowed')
        }
        return this.precision ? (a / b).toFixed(this.precision): a / b
    }
}
