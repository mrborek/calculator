interface CalculatorOptions {
  precision?: number;
}

export default class Calculator {
  precision: number | undefined = undefined;

  total: number = 0;

  constructor(options?: CalculatorOptions) {
    if (options?.precision) this.precision = options?.precision;

  }

  private formatResult(value: number): number | string {
    return this.precision !== undefined
      ? parseFloat(value.toFixed(this.precision))
      : value;
  }

  private validateInput(a: number, b?: number){
    if(a === undefined && b){
      throw new Error("missing first number");
    }
  }

  add(a: number, b?: number) {
    this.validateInput(a, b)

    if (a && b)
      this.total = a + b

    if (a && !b)
      this.total = this.total + a
    
    return this
  }

  subtract(a: number, b?: number) {
    this.validateInput(a, b)

    if (a && b)
      this.total = a - b

    if (a && !b)
      this.total = this.total - a
  
    return this
  }

  multiply(a: number, b?: number) {
    this.validateInput(a, b)

    if (a && b)
      this.total = a * b

    if (a && !b)
      this.total = this.total * a

    return this
  }

  divide(a: number, b?: number) {
    this.validateInput(a, b)

    if (a === 0 || b === 0) {
      throw new Error("division by zero is not allowed");
    }
    if (a && b)
      this.total = a / b

    if (a && !b)
      this.total = this.total / a

    return this
  }

  clear(){
    this.total = 0

    return this
  }

  getTotal(){
    return this.formatResult(this.total)
  }
}
