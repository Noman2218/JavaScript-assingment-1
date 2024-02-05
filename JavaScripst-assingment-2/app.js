//Question/1

// let a = 10;
// document.write("Result:<br>");
// document.write("The value of a is: " + a + "<br>");
// document.write("--------------------<br>");

// a++;
// document.write("The value of ++a is: " + a + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");

// a++;
// document.write("The value of a++ is: " + (a - 1) + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");

// --a;
// document.write("The value of --a is: " + a+ "<br>");
// document.write("Now the value of a is: " + 11+ "<br><br>");

// a--;
// document.write("The value of --a is: " +11+ "<br>");
// document.write("Now the value of --a is:" +10+ "<br>");


//Question/2

// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;

// alert(result)


// Explanation:

// 1. `--a`: Decrement `a` before its value is used. So, `a` becomes 1.
// 2. `--a - --b`: Decrement `a` before its value is used (a is now 0), and decrement `b` before its value is used (b is now 0). So, the expression becomes 0 - 0 = 0.
// 3. `--a - --b + ++b`: Decrement `a` before its value is used (a is now -1), decrement `b` before its value is used (b is now -1), and increment `b` before its value is used (b is now 0). So, the expression becomes -1 - (-1) + 0 = -1 + 1 + 0 = 0.
// 4. `--a - --b + ++b + b--`: Decrement `a` before its value is used (a is now -2), decrement `b` before its value is used (b is now -2), increment `b` before its value is used (b is now -1), and decrement `b` after its value is used (b is now -2). So, the expression becomes -2 - (-2) + (-1) + (-2) = -2 + 2 - 1 - 2 = -3.

// Final output:
// - `a`: -2
// - `b`: -2
// - `result`: -3

//Question/3

// Prompt the user to enter their name
// var userName = prompt("Please enter your name:");

// Greet the user
// alert("Hello, " + userName + "! Welcome to our website.");

//Question/4

// Prompt the user to enter a number
// var number = prompt("Enter a number:");

// Convert the input to a number (or use default value of 5 if no input is provided)
// number = number ? parseInt(number) : 5;

// Display the multiplication table in the browser
// document.write("<h2>Multiplication Table of " + number + "</h2>");

// for (var i = 1; i <= 10; i++) {
//     document.write(number + " x " + i + " = " + (number * i) + "<br>");
// }


//Question/5

// Prompt the user to enter three subject names
// var subject1 = prompt("Enter the name of first subject:");
// var subject2 = prompt("Enter the name of second subject:");
// var subject3 = prompt("Enter the name of third subject:");

// Total marks for each subject
// var totalMarks = 100;

// Prompt the user to enter obtained marks for each subject
// var obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));
// var obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
// var obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

// Calculate total marks and percentage
// var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
// var percentage = (totalObtainedMarks / (3 * totalMarks)) * 100;

// Display the result in the browser
// document.write("<h2>Result</h2>");
// document.write("<table>");
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
// document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
// document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
// document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
// document.write("<tr><th>Total</th><th>" + (3 * totalMarks) + "</th><th>" + totalObtainedMarks + "</th></tr>");
// document.write("</table>");
// document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");