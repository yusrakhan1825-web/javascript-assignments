// Q:1 Write a program that take two numbers & add them in a new variable. Show the result in your browser.  

var num1 = 10;
var num2 = 5;
var total = num1 + num2
document.write("Sum of " + num1 +" and "+ num2 + " is " + total)

// Q:2 Repeat task1 for subtraction, multiplication, division & modulus. 
// SUBTRACTION
var num1 = 10;
var num2 = 5;
var total = num1 - num2
document.write(total);
// MULTIPLICATION
var num1 = 10;
var num2 = 5;
var total = num1 * num2
document.write(total);
// DIVISION
var num1 = 10;
var num2 = 5;
var total = num1 / num2
document.write(total);
// MODULUS
var num1 = 10;
var num2 = 5;
var total = num1 % num2
document.write(total);

//Q:3 JS Mathematic Expressions
// a.
var num;
// b.
document.write("<br>Value after variable declaration is: " + num);
// c.
var num = 5 ;
// d.
document.write("<br> “Initial value: " + num);
// e.
var num = num + 1;
// f.
document.write("Increment value  " + num);
// g.
var num = num + 7;
// h.
document.write("value after addition is:  " + num);
// i.
var num = num - 1;
// j.
document.write("<br> Value after decrement is:" + num);
// k.
var num = num / 3;
document.write("<br>The reminder is " + num);
var num = num % 3;
document.write("<br>The reminder is " + num);

// Q:4 movie ticket is 600 PKR,ticket price in a variable & calculate the cost of buying 5 tickets .
var ticketPrice = 600;
var totalTickets = 5;
var totalCost = ticketPrice * totalTickets;
document.write("<br>Total cost to buy 5 tickets to a movie is " + totalCost + "PKR");

// Q:5 o display multiplication table of any number in your browser.

document.write("<h1>Table of 4");
document.write("<br>4×1=4");
document.write("<br>4×2=8");
document.write("<br>4×3=12");
document.write("<br>4×4=16");
document.write("<br>4×5=20");
document.write("<br>4×6=24");
document.write("<br>4×7=28");
document.write("<br>4×8=32");
document.write("<br>4×9=36");
document.write("<br>4×10=40");

// Q:6 The Temperature Converter converter based on the steps .
// a.
var celsiusTemperature = 25;
// b.
var  fahrenheitFromC = (celsius * 9 / 5) + 32;
document.write(celsius + "℃ is " + fahrenheitFromC + "°F <br>" );
// c.
var fahrenheit = 70;
// d.
var celsiusFromF = (fahrenheit - 32) * 5 / 9;
document.write(fahrenheit + "°F is " + celsiusFromF + "℃" );

// Q:7  checkout process of a shopping cart system for an e-commerce website.

// a.
var price1 = 650;
// b. 
var price2 = 100;
// c. 
var quantity1 = 1;
// d. 
var quantity2 = 7;
// e. 
var shippingCharges = 150;
var totalCost = (price1 * qty1) + (price2 * qty2) + shippingCharges;

document.write("<h1>Shopping Cart");
document.write("Price of item 1 is " + price1 + "<br>");
document.write("Quantity of item 1 is " + qty1 + "<br>");
document.write("Price of item 2 is " + price2 + "<br>");
document.write("Quantity of item 2 is " + qty2 + "<br>");
document.write("Shipping Charges " + shippingCharges + "<br>");
document.write("Total cost of your order is " + totalCost);

// Q:8  Compute the percentage & show the result in your browser.

var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained / totalMarks) * 100;

document.write("<h1>Marks Sheet");
document.write("Total marks: " + totalMarks + "<br>");
document.write("Marks obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%");

// Q:9 we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees.

var totalPKR = (10 * 104.80) + (25 * 28);

document.write("<h1>Currency in PKR</h1>");
document.write("Total Currency in PKR: " + totalPKR);

// Q:10 Write a program to initialize a variable with some number and do arithmetic .

// a.
var initial = 5;
// b.
var result = ((initial + 5) * 10) / 2;
// . c
document.write("Initial number: " + initial + "<br>");
document.write("Result after arithmetic: " + result);

// Q:11 The Age Calculator: Forgot how old someone is? Calculate it! 

// a. 
var currentYear = 2026;
// b.
var birthYear = 1992;
// c.
var age1 = currentYear - birthYear;
var age2 = age1 - 1;

document.write("<h1>Age Calculator</h1>");
document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("They are either " + age2 + " or " + age1 + " years old.");

// Q:12  The Geometrizer: Calculate properties of a circle. a. Store a radius into a variable. 

var pi = 3.142;
// a. 
var radius = 20;
// b.
var circumference = 2 * pi * radius;
var area = pi * (radius * radius);


document.write("<h1>The Geometrizer</h1>");
document.write("Radius of a circle: " + radius + "<br>");
document.write("The circumference is " + circumference + "<br>");
document.write("The area is " + area);

// Q:13 


var favoriteSnack = "chocolate chips";
var currentAge = 15;
var maxAge = 65;
var amountPerDay = 3;
var totalYearsLeft = maxAge - currentAge;
var totalSnacksNeeded = totalYearsLeft * 365 * amountPerDay;

document.write("<h1>The Lifetime Supply Calculator</h1>");
document.write("Favorite Snack: " + favoriteSnack + "<br>");
document.write("Current Age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + maxAge + "<br>");
document.write("Amount of snacks per day: " + amountPerDay + "<br>");
document.write("You will need " + totalSnacksNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge);