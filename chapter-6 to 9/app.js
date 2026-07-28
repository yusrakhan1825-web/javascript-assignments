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
document.write("<h1>Hello, " + userName + " hope you doing good today✨.</h1>");

   

// // Q:4
 
var num = prompt("Enter a number:") || 5;

document.write(num + " x 1 = " + (num * 1) + "<br>");
document.write(num + " x 2 = " + (num * 2) + "<br>");
document.write(num + " x 3 = " + (num * 3) + "<br>");
document.write(num + " x 4 = " + (num * 4) + "<br>");
document.write(num + " x 5 = " + (num * 5) + "<br>");
document.write(num + " x 6 = " + (num * 6) + "<br>");
document.write(num + " x 7 = " + (num * 7) + "<br>");
document.write(num + " x 8 = " + (num * 8) + "<br>");
document.write(num + " x 9 = " + (num * 9) + "<br>");
document.write(num + " x 10 = " + (num * 10) + "<br>");

// Q:5

var subject1 = prompt("Enter the name of the first subject:");
var subject2 = prompt("Enter the name of the second subject:");
var subject3 = prompt("Enter the name of the third subject:");

var totalMarksPerSubject = 100;
var grandTotalMarks = totalMarksPerSubject * 3;

var marks1 = Number(prompt("Enter obtained marks for " + subject1 + ":"));
var marks2 = Number(prompt("Enter obtained marks for " + subject2 + ":"));
var marks3 = Number(prompt("Enter obtained marks for " + subject3 + ":"));

var totalObtained = marks1 + marks2 + marks3;
var percentage = (totalObtained / grandTotalMarks) * 100;

document.write("<h2>Subject Marks Result</h2>");
document.write("<table border='1' cellpadding='10' cellspacing='0'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");

document.write("<tr><td>" + subject1 + "</td><td>" + totalMarksPerSubject + "</td><td>" + marks1 + "</td><td>" + ((marks1 / totalMarksPerSubject) * 100) + "%</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarksPerSubject + "</td><td>" + marks2 + "</td><td>" + ((marks2 / totalMarksPerSubject) * 100) + "%</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarksPerSubject + "</td><td>" + marks3 + "</td><td>" + ((marks3 / totalMarksPerSubject) * 100) + "%</td></tr>");

document.write("<tr><td><strong>Total</strong></td><td><strong>" + grandTotalMarks + "</strong></td><td><strong>" + totalObtained + "</strong></td><td><strong>" + percentage.toFixed(2) + "%</strong></td></tr>");
document.write("</table>");


