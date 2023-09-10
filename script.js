// Function to Clear the values in Display_Bar
function clearScreen() {
    document.getElementById("result").value = " ";
}
 
// This function displays the values
function display(value) {
    document.getElementById("result").value += value;
}
 
// This function evaluates the expression and returns the result
function calculation() {
    let expression = document.getElementById("result").value;
    let output = eval(expression);
    document.getElementById("result").value = output;
}