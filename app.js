// Question/1
// alert("Hello Students");

//Question/2
// var errorMessage = "Error! Please Enter a valid password";
// alert(errorMessage);

//Quesiton/3
// var message = "(hint use line break)";
// alert(message);

//Question/4
// var fullName = "Muhammad Noman Hayat";

// alert(fullName);
// alert(fullName);
// alert(fullName);

//Question/5

//Question/7
// var username = "M.Noman Hayat";
// console.log(username)

// //Question/8
// var myName ="Muhammad Noman Hayat"
// console.log(myName)

//Question/9
// Declare a variable titled 'message'
// var message;
// Assign "Hello World" to the variable 'message'
// message = "Hello World";
// Display the message in an alert box
// alert(message);

//Question/10
// Declare variables to store student's bio data
// var studentName = "Ahmed";
// var studentAge = 20;
// var studentGrade = "A";
// var studentCity = "Lahore";

// console.log(studentName);
// console.log(studentAge);
// console.log(studentGrade);
// console.log(studentCity);

// Display the student's bio data in alert boxes
// alert("Name : studentName");
// alert("Age : studentAge");
// alert("Grade : studentGrade");
// alert("City : studentCity");

// Question/11

// Declare a variable called 'email' and assign your email address to it
// var email = "hayatgil2218@gmail.com";

// Show a message in an alert box using string concatenation
// alert("My email address is : hayatgil2218@gmail.com ");

// Question/13

// Store the given string in a variable
// var myString = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";

// Show the string in an alert box
// alert(myString);

// Show the string in the browser
// document.write(myString);

// Question/14

// Declare a variable called 'age' and assign age to it
// var age = 18; 

// Show age in an alert box
// alert("My age is : 18 ");


// Question/15

// Function to update and display the number of visits
// function updateVisits() {
    // Check if the 'visits' key exists in local storage
    // if (localStorage.getItem('visits')) {
        // If it exists, increment the value by 1
        // var visits = parseInt(localStorage.getItem('visits')) + 1;
    // } else {
        // If it doesn't exist, set it to 1
        // var visits = 1;
    // }

    // Store the updated value in local storage
    // localStorage.setItem('visits', visits);

    // Display the number of visits on the web page
    // document.getElementById('visits').innerText = "You have visited this site " + visits + " times.";
// }

// Call the function when the page loads
// window.onload = updateVisits;

// Question/16

// Declare a variable called 'birthYear' and assign your birth year to it
// var birthYear = 2005; 
// Show a message in the browser
// document.write("My birth year is : 2005" );

// Question/17

// Store visitor information in variables
// var visitorName = "John Doe";
// var productTitle = "T-shirt";
// var quantity = 5;

// Show message in the browser
// document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.");


// Question/18

// var variable1, variable2, variable3;


// Question/19


// Legal Variable 

// 1. myVariable
// 2. camelCaseVariable
// 3. number1
// 4. _underscoreVariable
// 5. $dollarVariable


// Illegal Variable

// 1. 123illegalVariable (Cannot start with a number)
// 2. illegal-variable (Cannot contain hyphens)
// 3. !illegalVariable (Cannot contain special characters except underscore and dollar sign)
// 4. var (Reserved keyword in JavaScript)
// 5. illegal variable (Cannot contain spaces)


// In JavaScript, variable names must follow certain rules:

// They can only contain letters, digits, underscores (_), or dollar signs ($).
// They cannot start with a digit.
// They cannot be reserved keywords (e.g., var, if, else, function, etc.).
// They cannot contain spaces or hyphens.


// Question/20

// document.write("<h1>Rules for naming JS variables</h1>");
// document.write("<p>Variable names can only contain letters, digits, underscores, and dollar signs. For example $my_1stVariable</p>");
// document.write("<p>Variables must begin with a letter, underscore, or dollar sign. For example $name, _name, or name</p>");
// document.write("<p>Variable names are case-sensitive</p>");
// document.write("<p>Variable names should not be JS keywords</p>");

// Question/21

// var number1 = parseInt(prompt());
// var number2 = parseInt(prompt());

// Add the numbers
// var sum=number1+number2

// Display the result in the browser
// document.write("The sum of " + number1 + " and " + number2 + " is: " + sum);


// Question/22

// var number1 = prompt();
// var number2 = prompt();

// multiply the numbers
// var mult=number1*number2

// Display the result in the browser
// document.write("The multiplication of " + number1 + " and " + number2 + " is: " + mult);

// Question/23

// a. Declare a variable.
// var myVariable;

// b. Show the value of the variable after declaration.
// document.write("Value after variable declaration is: " + myVariable + "<br>");

// c. Initialize the variable with some number.
// myVariable = 5;

// d. Show the initial value of the variable.
// document.write("Initial value: " + myVariable + "<br>");

// e. Increment the variable.
// myVariable++;

// f. Show the value of the variable after increment.
// document.write("Value after increment is: " + myVariable + "<br>");

// g. Add 7 to the variable.
// myVariable += 7;

// h. Show the value of the variable after addition.
// document.write("Value after addition is: " + myVariable + "<br>");

// i. Decrement the variable.
// myVariable--;

// j. Show the value of the variable after decrement.
// document.write("Value after decrement is: " + myVariable + "<br>");

// k. Show the remainder after dividing the variable's value by 3.
// var remainder = myVariable % 3;

// l. Show the remainder.
// document.write("The remainder is: " + remainder);

// Question/24

// Cost of one movie ticket in PKR
// var ticketPrice = 600;

// Number of tickets to buy
// var numberOfTickets = 5;

// Calculate the total cost
// var totalCost = ticketPrice * numberOfTickets;

// Display the total cost in the browser
// document.write("The cost of buying " + numberOfTickets + " movie tickets is " + totalCost + " PKR.");

// Question/25

// Number for which multiplication table is generated
// var number = 12;

// // Display the multiplication table in the browser
// document.write("<h2>Multiplication Table of " + number + "</h2>");

// for (var i = 1; i <= 10; i++) {
//     document.write(number + " x " + i + " = " + (number * i) + "<br>");
// }