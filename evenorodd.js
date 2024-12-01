const readline = require("readline");

/**
 * To determine if a number is even or odd.
 * @param {number} num - The integer to evaluate.
 * @returns {string} - "Even" if the number is even, "Odd" if the number is odd.
 */
function evenOrOdd(num) {
    if (!Number.isInteger(num)) {
        throw new Error("Input must be an integer.");
    }
    return num % 2 === 0 ? "Even" : "Odd";
}

// Setting up the readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Prompt the user for input
rl.question("Enter an integer: ", (input) => {
    // Convert input to a number
    const num = parseInt(input, 10);

    // Check if the input is a valid number
    if (isNaN(num)) {
        console.log("Invalid input. Please enter a valid integer.");
    } else {
        // Call the evenOrOdd function and display the result
        console.log(`The number ${num} is ${evenOrOdd(num)}.`);
    }

    // Close the readline interface
    rl.close();
});

