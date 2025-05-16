class Calculator{
    constructor(number, operator, results){
        this.number = number;
        this.operator= operator;
        this.results = results;
        
    }
    //validate the input
    validate(){
        if(isNaN(this.number)){
            console.log("Only numbers Allowed No other character")
        }
    }
    // function that will display all numbers and operators
    numberOperator(){
        this.validate();
        const numberList = document.getElementById("numbers");
        numberList.innerHTML = `
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
        </div>
        <button id = "equals">=</button>
        `;
        // numberList.push(div)
        const numberButtons = document.querySelectorAll('.nums');
        const operatorButtons = document.querySelectorAll('.ops');
        const equalsButton = document.getElementById('equals');
    }
    //function to add
    addition(){
        this.validate()
        //number clicked and the operator then it console.logs the output

    }
    // function to subtract
    subtraction(){
        this.validate()

    }
    // function for multiplication
    multiplication(){
        this.validate()

    }
    //fuction for division
    division(){
        this.valitade()

    }
}
// create the Object
const calc = new Calculator();
calc.numberOperator()
