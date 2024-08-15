function faultyCalculator(num1, num2, operator) {
    // 10% chance of generating a faulty result
    if (Math.random() < 0.1) {
        // Faulty operations
        const faultyOperations = ['+', '-', '*', '/'];
        const randomIndex = Math.floor(Math.random() * faultyOperations.length);
        const faultyOperator = faultyOperations[randomIndex];
        
        if (faultyOperator === '+') {
            return num1 - num2; // Subtraction instead of addition
        } else if (faultyOperator === '-') {
            return num1 + num2; // Addition instead of subtraction
        } else if (faultyOperator === '*') {
            return num1 / num2; // Division instead of multiplication
        } else if (faultyOperator === '/') {
            return num1 * num2; // Multiplication instead of division
        }
    }

    //Normal calculation
    if (operator === '+') {
        return num1 + num2;
    } else if (operator === '-') {
        return num1 - num2;
    } else if (operator === '*') {
        return num1 * num2;
    } else if (operator === '/') {
        return num1 / num2;
    } else {
        return 'Invalid operator';
    }
}

// Example usage
const num1 = parseFloat(prompt("Enter first number:"));
const num2 = parseFloat(prompt("Enter second number:"));
const operator = prompt("Enter operator (+, -, *, /):");

const result = faultyCalculator(num1, num2, operator);
console.log("Result:", result);