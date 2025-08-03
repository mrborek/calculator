# Calculator Library

A comprehensive TypeScript calculator library built with Vite, featuring basic and advanced mathematical operations with configurable precision and error handling.

## Features

- ✅ Basic arithmetic operations (add, subtract, multiply, divide)
- ✅ Advanced operations (power, square root, factorial, percentage)
- ✅ Expression evaluation
- ✅ Configurable precision
- ✅ Flexible error handling
- ✅ Full TypeScript support
- ✅ Comprehensive test coverage
- ✅ Zero dependencies

## Installation

```bash
npm install calculator-lib
```

## Usage

### Using the Calculator Class

```typescript
import Calculator from 'calculator-lib';

// Create a calculator instance
const calc = new Calculator();

// Basic operations
calc.add(2, 3);        // 5
calc.subtract(10, 4);  // 6
calc.multiply(3, 4);   // 12
calc.divide(15, 3);    // 5

// Advanced operations
calc.power(2, 3);      // 8
calc.sqrt(16);         // 4
calc.factorial(5);     // 120
calc.percentage(100, 10); // 10

// Expression evaluation
calc.calculate('2 + 3 * 4'); // 14
calc.calculate('(2 + 3) * 4'); // 20
```

### Using Utility Functions

```typescript
import { add, subtract, multiply, divide } from 'calculator-lib';

add(2, 3);        // 5
subtract(10, 4);  // 6
multiply(3, 4);   // 12
divide(15, 3);    // 5
```

### Configuration Options

```typescript
import Calculator from 'calculator-lib';

// Configure precision and error handling
const calc = new Calculator({
  precision: 2,        // Round results to 2 decimal places
  throwOnError: false  // Return NaN instead of throwing errors
});

calc.divide(1, 3);  // 0.33 (instead of 0.3333333333)
calc.divide(5, 0);  // NaN (instead of throwing CalculationError)
```

## API Reference

### Calculator Class

#### Constructor

```typescript
new Calculator(options?: CalculatorOptions)
```

**Options:**
- `precision?: number` - Number of decimal places for results (default: 10)
- `throwOnError?: boolean` - Whether to throw errors or return NaN (default: true)

#### Methods

- `add(a: number, b: number): number` - Addition
- `subtract(a: number, b: number): number` - Subtraction
- `multiply(a: number, b: number): number` - Multiplication
- `divide(a: number, b: number): number` - Division
- `power(base: number, exponent: number): number` - Exponentiation
- `sqrt(value: number): number` - Square root
- `percentage(value: number, percent: number): number` - Percentage calculation
- `factorial(n: number): number` - Factorial (for non-negative integers)
- `calculate(expression: string): number` - Expression evaluation

### Utility Functions

All calculator methods are also available as standalone functions:

```typescript
import { add, subtract, multiply, divide, power, sqrt, percentage, factorial } from 'calculator-lib';
```

### Error Handling

The library includes a custom `CalculationError` class for mathematical errors:

```typescript
import Calculator, { CalculationError } from 'calculator-lib';

const calc = new Calculator();

try {
  calc.divide(5, 0);
} catch (error) {
  if (error instanceof CalculationError) {
    console.log('Mathematical error:', error.message);
  }
}
```

## Development

### Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/calculator-lib.git
cd calculator-lib

# Install dependencies
npm install
```

### Scripts

```bash
# Development mode
npm run dev

# Build the library
npm run build

# Run tests
npm run test

# Run tests with coverage
npm run test:coverage

# Lint code
npm run lint
```

### Building

The library is built using Vite and outputs:
- ES modules (`dist/index.es.js`)
- UMD bundle (`dist/index.umd.js`)
- TypeScript declarations (`dist/index.d.ts`)

## Testing

The library includes comprehensive tests using Vitest:

```bash
npm run test
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Changelog

### v1.0.0
- Initial release
- Basic arithmetic operations
- Advanced mathematical functions
- Expression evaluation
- Configurable precision and error handling
- Full TypeScript support
