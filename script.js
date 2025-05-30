class Calculator{
        constructor(){
            
        }
        // function that will display all numbers and operators
        numberOperator(){
        ;
            const numberList = document.getElementById("numbers");
            let expression = ""; // store numbers and operator as a string
            numberList.innerHTML = `
            <div class="allContent">
                <div class="operators">
                    <button class="ops">+</button>
                    <button class="ops">-</button>
                    <button class="ops">*</button>
                    <button class="ops">/</button>
                </div>
                <div class="numberTotal">
                    <button class = "nums">1</button>
                    <button class = "nums">2</button>
                    <button class = "nums">3</button>
                    <button class = "nums">4</button>
                    <button class = "nums">5</button>
                    <button class = "nums">6</button>
                    <button class = "nums">7</button>
                    <button class = "nums">8</button>
                    <button class = "nums">9</button>
                    <button class = "nums">0</button>
                    <button id = "equals">=</button>
                    <button id="edit"><<</button>
                </div>
            </div>
            
            `;
            const numberButtons = document.querySelectorAll('.nums');
            const operatorButtons = document.querySelectorAll('.ops');
            const equalsButton = document.getElementById('equals');
            const editButton = document.getElementById("edit");

            const display = document.getElementById("display");

                    numberButtons.forEach(button => {
                    button.addEventListener("click", () => {
                    // display.textContent += button.textContent;
                    expression += button.textContent;          // build expression
                    display.textContent = expression; 
                });
            });

            operatorButtons.forEach(button => {
                button.addEventListener("click", () => {
                // display.textContent += button.textContent;
                    expression += ` ${button.textContent} `;         // build expression
                    display.textContent = expression; 
            });
            });
     // how to get the element from the numberButton and operatorButton then do the operation using theif else statement such that when a  + sign is clicked the output will be the sum and it should display on the screen

    //Handle equals click
    equalsButton.addEventListener("click", () => {
        const parts = expression.trim().split(" ");
        const num1 = Number(parts[0]);
        const operator = parts[1];
        const num2 = Number(parts[2]);

        let result = 0;

        if (operator === "+") {
            result = num1 + num2;
        } else if (operator === "-") {
            result = num1 - num2;
        } else if (operator === "*") {
            result = num1 * num2;
        } else if (operator === "/") {
            result = num2 !== 0 ? num1 / num2 : "Error (Divide by 0)";
        } else {
            result = "Invalid operator";
        }

        display.textContent = result;
        expression = "";
    });

    // Add the edit functionality
    editButton.addEventListener("click", () => {
        // Remove the last character from the expression
        expression = expression.trim().slice(0, -1);
        
        // Also remove any trailing operator spacing (optional)
        if (expression.endsWith("+") || expression.endsWith("-") || expression.endsWith("*") || expression.endsWith("/")) {
            expression = expression.trim(); // remove any trailing spaces
        }
    
        display.textContent = expression;
    });
    
        
}

}
// create the Object
const calc = new Calculator();
calc.numberOperator()
