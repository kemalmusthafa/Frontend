
    const input = document.querySelector('.kotak1');
    const buttons = document.querySelectorAll('button');

    let currentInput = '';  // Stores the current input value

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (value === 'C') {
                // Clear input
                currentInput = '';
                input.value = '';
            } else if (value === '=') {
                try {
                    // Evaluate the expression
                    currentInput = eval(currentInput).toString();
                    input.value = currentInput;
                } catch {
                    input.value = 'Error';  // Handle invalid expression
                    currentInput = '';
                }
            } else {
                // Append value to the input
                currentInput += value;
                input.value = currentInput;
            }
        });
    });


    document.addEventListener('keydown', (e) => {
        const value = '123456789+-/*.'.split('')
        const key = e.key;
        if (value.includes(key)) {
            input.value += key
        }
        if (key == 'Enter') {
            input.value = eval(input.value)
        }
        if (key == 'Backspace') {
            input.value = ''
        }
    })

