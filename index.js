// index.js

// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get all the buttons
    const buttons = document.querySelectorAll('button');
    const display = document.getElementById('displaynumber');

    // Initialize an empty expression
    let expression = '';

    // Function to handle button clicks
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const value = event.target.innerText;

            if (value === 'C') {
                // Clear the display
                expression = '';
                display.innerText = '0';
            } else if (value === 'DEL') {
                // Delete the last character
                expression = expression.slice(0, -1);
                display.innerText = expression || '0';
            } else if (value === '=') {
                try {
                    // Evaluate the expression
                    let result = eval(expression.replace(/×/g, '*').replace(/÷/g, '/'));
                    // Update display with the result
                    display.innerText = parseFloat(result).toFixed(2);
                    // Reset expression
                    expression = display.innerText;
                } catch {
                    display.innerText = 'Error';
                    expression = '';
                }
            } else {
                // Append the clicked button's value to the expression
                expression += value;
                display.innerText = expression;
            }
        });
    });
});
