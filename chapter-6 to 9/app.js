// Q:1 
document.write("<h3><br>Result:</h3>");

var a = 10;

document.write("The value of a is: " + a);
document.write("<br>.....................................");

document.write("<br><br>The value of ++a is: " + ++a);
document.write("<br>Now the value of a is: " + a);

document.write("<br><br>The value of a++ is: " + a++);
document.write("<br>Now the value of a is: " + a);

document.write("<br><br>The value of --a is: " + (--a));
document.write("<br>Now the value of a is: " + a);

document.write("<br><br>The value of a-- is: " + (a--));
document.write("<br>Now the value of a is: " + a);

// Q:2

var a = 2, b = 1;

var stage1 = --a;
document.write("<br><br>Stage 1 --a : ", "Value =", stage1, " a =", a, ", b =", b);
 
var stage2 = --b;
document.write("<br><br>Stage 2 --b :", " Value = ", stage2, " a =", a, ", b =", b);

var stage3 = ++b;
document.write("<br><br>Stage 3 ++b :", " Value =", stage3, " a =", a, ", b =", b);

var stage4 = b--;
document.write("<br><br>Stage 4 b--: ", " Value =", stage4, " a =", a, ", b =", b);

var result = --a - --b + ++b + b--;

document.write("<br><br>Final result is:");
document.write("<br><br>a =", a);
document.write("<br><br>b =", b);
document.write("<br><br>result =", result);

// Q:3

var userName = prompt("Please enter your name:");

if (userName) {
    document.write("<h1>Hello, " + userName + "! Welcome to our website.</h1>");
} else {
    document.write("<h1>Hello, Guest! Welcome to our website.</h1>");
}

// // Q:4
// // Take input from the user
// let input = prompt("Enter a number to display its multiplication table:", "5");

// // Use 5 as a default value if the user leaves it blank or cancels
// let number = input === "" || input === null ? 5 : Number(input);

// document.write("<h3>Multiplication Table of " + number + "</h3>");

// // Generate and display the table
// for (let i = 1; i <= 10; i++) {
//     document.write(number + " x " + i + " = " + (number * i) + "<br>");
// }

// Q:5
// a) Take three subjects name from user and store them in 3 different variables

// let subject1 = prompt("Enter the name of the first subject:");
// let subject2 = prompt("Enter the name of the second subject:");
// let subject3 = prompt("Enter the name of the third subject:");

// // b) Total marks for each subject is 100, store it in another variable
// let totalMarksPerSubject = 100;
// let grandTotalMarks = totalMarksPerSubject * 3;

// // c) Take obtained marks for first subject from user and store it in different variable
// let marks1 = Number(prompt("Enter obtained marks for " + subject1 + ":"));

// // d) Take obtained marks for the remaining 2 subjects from user
// let marks2 = Number(prompt("Enter obtained marks for " + subject2 + ":"));
// let marks3 = Number(prompt("Enter obtained marks for " + subject3 + ":"));

// // e) Calculate totals and percentage
// let totalObtained = marks1 + marks2 + marks3;
// let percentage = (totalObtained / grandTotalMarks) * 100;

// // Display the result as a structured table in the browser
// document.write("<h2>Subject Marks Result</h2>");
// document.write("<table border='1' cellpadding='10' cellspacing='0'>");
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");

// document.write("<tr><td>" + subject1 + "</td><td>" + totalMarksPerSubject + "</td><td>" + marks1 + "</td><td>" + ((marks1 / totalMarksPerSubject) * 100) + "%</td></tr>");
// document.write("<tr><td>" + subject2 + "</td><td>" + totalMarksPerSubject + "</td><td>" + marks2 + "</td><td>" + ((marks2 / totalMarksPerSubject) * 100) + "%</td></tr>");
// document.write("<tr><td>" + subject3 + "</td><td>" + totalMarksPerSubject + "</td><td>" + marks3 + "</td><td>" + ((marks3 / totalMarksPerSubject) * 100) + "%</td></tr>");

// document.write("<tr><td><strong>Total</strong></td><td><strong>" + grandTotalMarks + "</strong></td><td><strong>" + totalObtained + "</strong></td><td><strong>" + percentage.toFixed(2) + "%</strong></td></tr>");
// document.write("</table>");

// Q:6
// a) Take three subjects name from user

// let subject1 = prompt("Enter the name of the first subject:");
// let subject2 = prompt("Enter the name of the second subject:");
// let subject3 = prompt("Enter the name of the third subject:");

// // b) Total marks for each subject is 100
// let totalMarksPerSubject = 100;
// let grandTotalMarks = totalMarksPerSubject * 3;

// // c) Take obtained marks for first subject
// let marks1 = Number(prompt("Enter obtained marks for " + subject1 + ":"));

// // d) Take obtained marks for remaining 2 subjects
// let marks2 = Number(prompt("Enter obtained marks for " + subject2 + ":"));
// let marks3 = Number(prompt("Enter obtained marks for " + subject3 + ":"));

// // e) Now calculate total marks and percentage
// let totalObtained = marks1 + marks2 + marks3;
// let percentage = (totalObtained / grandTotalMarks) * 100;

// // Calculate individual percentages
// let pct1 = (marks1 / totalMarksPerSubject) * 100;
// let pct2 = (marks2 / totalMarksPerSubject) * 100;
// let pct3 = (marks3 / totalMarksPerSubject) * 100;

// // show the result in browser like this (Hint: user table)
// document.write("<table border='0' cellpadding='5' cellspacing='0' style='font-family: Arial, sans-serif; text-align: left;'>");
// document.write("  <tr style='font-weight: bold;'>");
// document.write("    <td style='padding-right: 20px;'>Subject</td>");
// document.write("    <td style='padding-right: 20px;'>Total Marks</td>");
// document.write("    <td style='padding-right: 20px;'>Obtained Marks</td>");
// document.write("    <td>Percentage</td>");
// document.write("  </tr>");
// document.write("  <tr>");
// document.write("    <td>" + subject1 + "</td>");
// document.write("    <td>" + totalMarksPerSubject + "</td>");
// document.write("    <td>" + marks1 + "</td>");
// document.write("    <td>" + pct1 + "%</td>");
// document.write("  </tr>");
// document.write("  <tr>");
// document.write("    <td>" + subject2 + "</td>");
// document.write("    <td>" + totalMarksPerSubject + "</td>");
// document.write("    <td>" + marks2 + "</td>");
// document.write("    <td>" + pct2 + "%</td>");
// document.write("  </tr>");
// document.write("  <tr>");
// document.write("    <td>" + subject3 + "</td>");
// document.write("    <td>" + totalMarksPerSubject + "</td>");
// document.write("    <td>" + marks3 + "</td>");
// document.write("    <td>" + pct3 + "%</td>");
// document.write("  </tr>");
// document.write("  <tr style='font-weight: bold;'>");
// document.write("    <td></td>");
// document.write("    <td>" + grandTotalMarks + "</td>");
// document.write("    <td>" + totalObtained + "</td>");
// document.write("    <td>" + Math.round(percentage) + "%</td>");
// document.write("  </tr>");
// document.write("</table>");