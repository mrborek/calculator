interface CalculatorOptions {
  precision?: number;
}

export default class Calculator {
  precision: number | undefined = undefined;

  constructor(options?: CalculatorOptions) {
    if (options?.precision) this.precision = options?.precision;
  }

  private formatResult(value: number): number | string {
    return this.precision !== undefined
      ? parseFloat(value.toFixed(this.precision))
      : value;
  }

  add(a: number, b: number) {
    return this.formatResult(a + b);
  }

  subtract(a: number, b: number) {
    return this.formatResult(a - b);
  }

  multiply(a: number, b: number) {
    return this.formatResult(a * b);
  }

  divide(a: number, b: number) {
    if (b === 0) {
      throw new Error("Error: division by zero is not allowed");
    }
    return this.formatResult(a / b);
  }
}
