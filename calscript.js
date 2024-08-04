// Get display elements  
const display = document.getElementById("display-text");  
let calcScreen = "";  
let inputMemory = [];  
let solutionHistory = [];  
let operationsCount = 0;  
let allBtn = document.querySelectorAll('.grid-item');  

// Attach event listeners to buttons  
allBtn.forEach(btn => btn.addEventListener("click", onClick));  

// Function to reset display and calculate result  
function calculateResult() {  
    const result = eval(inputMemory.join(''));  
    inputMemory.push(result);  
    solutionHistory.push(result);  
    display.innerText = result;  
    inputMemory = [];  
}  

// Function to handle button clicks  
function onClick(e) {  
    const btnValue = e.target.innerText;  
    if (btnValue === "=") {  
        calculateResult();  
    } else if (btnValue === "C") {  
        display.innerText = "";  
        inputMemory = [];  
        solutionHistory = [];  
    } else if (btnValue === "DEL") {  
        display.innerText = display.innerText.slice(0, -1);  
        inputMemory.pop();  
    } else {  
        inputMemory.push(btnValue);  
        display.innerText += btnValue;  
    }  
}  

// Function to display solution history  
function displayHistory() {  
    console.log(solutionHistory);  
}  

// Call displayHistory function on page load  
document.addEventListener('DOMContentLoaded', displayHistory);