//Question/1

// Prompt the user to enter the city name
// var cityName = prompt("Enter the city name:");

// Convert the user input to lowercase
// cityName = cityName.toLowerCase();

// Check if the entered city name is "Karachi"
// if (cityName === "karachi") {
    // If the city name is "Karachi", greet the user
    // alert("Welcome to the city of lights!");
// }

//Question/2

// var gender = prompt("Enter your gender (male or female):");

// Convert the gender input to lowercase
// gender = gender.toLowerCase();

// Check the gender and display the appropriate message
// if (gender === "male") {
//     alert("Good Morning Sir.");
// } else if (gender === "female") {
//     alert("Good Morning Ma'am.");
// } else {
//     alert("Invalid input. Please enter 'male' or 'female'.");
// }

//Question/3

// Prompt the user to enter the remaining fuel in car (in litres)
// var remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car (in litres):"));

// Check if the remaining fuel is less than 0.25 litres
// if (remainingFuel < 0.25) {
//     alert("Please refill the fuel in your car.");
// }

//Question/4

// a.

// var a = 4;
// if (++a === 5){
//     alert("given condition for variable a is true");
// }

//b.

// var b = 82;
// if (b++ === 83){
//     alert("given condition for variable b is true");
// }

//c.

// var c = 12;
// if (c++ === 13){
//     alert("condition 1 is true");
// }
// if (c === 13){
//     alert("condition 2 is true");
// }
// if (++c < 14){
//     alert("condition 3 is true");
// }
// if(c === 14){
//     alert("condition 4 is true");
// }

//d.

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//     alert("The cost equals");
// }

//e.

// if (true){
//     alert("True");
// } 
// if (false){
//     alert("False");
// }

//f.

// if("car" < "cat"){
//     alert("car is smaller than cat");
// }


//Question/5

// Generate a random secret number between 1 and 10
// var secretNumber = Math.floor(Math.random() * 10) + 1;

// Prompt the user to guess the secret number
// var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// Check if the user's guess is correct or close enough
// if (userGuess === secretNumber) {
//     alert("Bingo! Correct answer");
// } else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
//     alert("Close enough to the correct answer");
// } else {
//     alert("Sorry, incorrect guess. The correct answer was " + secretNumber);
// }

//question/6

// Prompt the user to enter a number
// var number = parseInt(prompt("Enter a number:"));

// Check if the number is divisible by 3
// if (number % 3 === 0) {
//     alert("The number " + number + " is divisible by 3.");
// } else {
//     alert("The number " + number + " is not divisible by 3.");
// }

//Question/7

// Prompt the user to enter a number
// var number = parseInt(prompt("Enter a number:"));

// Check if the number is even or odd
// if (number % 2 === 0) {
//     alert("The number " + number + " is an even number.");
// } else {
//     alert("The number " + number + " is an odd number.");
// }


//Question/8

// Prompt the user to enter the temperature
// var temperature = parseFloat(prompt("Enter the temperature:"));

// Check the temperature and display the message accordingly
// if (temperature > 40) {
//     alert("It is too hot outside.");
// } else if (temperature > 30) {
//     alert("The Weather today is Normal.");
// } else if (temperature > 20) {
//     alert("Today’s Weather is cool.");
// } else if (temperature > 10) {
//     alert("OMG! Today’s weather is so Cool.");
// } else {
//     alert("The temperature is below 10 degrees. It's very cold!");
// }

//Question/9

// Prompt the user to enter the first number
// var firstNumber = parseFloat(prompt("Enter the first number:"));

// Prompt the user to enter the second number
// var secondNumber = parseFloat(prompt("Enter the second number:"));

// Prompt the user to enter the operation (+, -, *, /, %)
// var operation = prompt("Enter the operation (+, -, *, /, %):");

// Initialize a variable to store the result
// var result;

// Perform the operation based on the input
// if (operation === "+") {
//     result = firstNumber + secondNumber;
// } else if (operation === "-") {
//     result = firstNumber - secondNumber;
// } else if (operation === "*") {
//     result = firstNumber * secondNumber;
// } else if (operation === "/") {
//     if (secondNumber === 0) {
//         alert("Error: Division by zero is not allowed.");
//     } else {
//         result = firstNumber / secondNumber;
//     }
// } else if (operation === "%") {
//     if (secondNumber === 0) {
//         alert("Error: Modulus by zero is not allowed.");
//     } else {
//         result = firstNumber % secondNumber;
//     }
// } else {
//     alert("Invalid operation. Please enter one of the following: +, -, *, /, %");
// }

// Display the result to the user
// if (result !== undefined) {
//     alert("The result is: " + result);
// }