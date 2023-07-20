// Assuming you have a variable to store the user-selected operator
let selectedOperator;

// Assuming you have a function to get the user input (e.g., from an input field)
function getUserInput() {
  // Replace this with your actual code to get the user input
  return document.getElementById('operatorInput').value;
}

// Get the user-selected operator from the input
selectedOperator = getUserInput();

// Perform different actions based on the selected operator
if (selectedOperator === '+') {
  // Code to perform when the user selects the addition operator (+)
  console.log('User selected the addition operator.');
} else if (selectedOperator === '-') {
  // Code to perform when the user selects the subtraction operator (-)
  console.log('User selected the subtraction operator.');
} else if (selectedOperator === '*') {
  // Code to perform when the user selects the multiplication operator (*)
  console.log('User selected the multiplication operator.');
} else if (selectedOperator === '/') {
  // Code to perform when the user selects the division operator (/)
  console.log('User selected the division operator.');
} else {
  // Code to perform when the user selects an operator that is not handled in the if-else statements
  console.log('Invalid operator selected.');
}
