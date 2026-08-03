// Q-1

var city = prompt("Enter your city name:");
if(city === "karachi"){
    alert("Welcome to city of lights");
}
// Q-2

var gender = prompt("Are you male or female?");
if(gender === "male"){
    alert("Good Morning Sir!");
}
else if( gender === "female"){
    alert("Good Morning Ma'am!");
}

// Q-3

var signalColor = prompt("Enter Traffic signal colors (red,yellow,green)!");

if(signalColor === "red"){
    alert("Must stop!");
}
else if(signalColor === "yellow"){
    alert("Ready to move!");
}
else if(signalColor === "green"){
    alert("Move Now!");
}

// Q-4

var fuel = prompt("Enter remaining fuel in the car(in litres)");
if (fuel < 0.25 ){
    alert("Please refill the fuel in your car.");
}

// Q-5
// a.
var a = 4;

if(++a === 5){
    alert("given condition for variable is true");
}
// b.
var b = 82;

if (b++ === 83){
    alert("given condition for variable is true");
}
// c.
var c = 12;

if (c++ === 13){
    alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
    alert("condition 3 is true");
}
if(c === 14){
    alert("conditon 4 is true");
}

// d.

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if(totalCost === laborCost + materialCost){
    alert("the cost equals");
}

// e.

if(true){
    alert("true");
}
if(false){
    alert("false");
}

// f.

if("car" < "cat"){
    alert("car is smaller than cat");
}

// Q-6

var subject1 = prompt("Enter marks obtained in Subject 1:");
var subject2 = prompt("Enter marks obtained in Subject 2:");
var subject3 = prompt("Enter marks obtained in Subject 3:");
var totalMarks = prompt("Enter total marks for all three subjects:");

var marksObtained = subject1 + subject2 + subject3;
var percentage = (marksObtained / totalMarks) * 100;

var grade = "";
var remarks = "";


if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}

document.write("<h1>Marks Sheet</h1>");
document.write("<p><b>Total marks:</b> " + totalMarks + "</p>");
document.write("<p><b>Marks obtained:</b> " + marksObtained + "</p>");
document.write("<p><b>Percentage:</b> " + percentage + "%</p>");
document.write("<p><b>Grade:</b> " + grade + "</p>");
document.write("<p><b>Remarks:</b> " + remarks + "</p>");

// Q-7
var secretNumber = 5;
var userGuessNumber = Number(prompt("Guess the secret number..."));
if(userGuessNumber === secretNumber){
    alert("BINGO!✨Correct answer!");
}
else if(userGuessNumber  + 1 === secretNumber){
    alert("Close enough to the correct answer!");
}

// Q-8
var num = Number(prompt("Enter any number to check if it's divisible by 3 !"));

if (num % 3 === 0 ){
    alert("the number " + num + " is divisible by 3.")
}
else{
    alert("the number " + num + " is not divisible by 3.")
}

// Q-9

var num = +prompt("Enter a number if it's Even or Odd!");

if (num % 2 === 0 ){
    alert(num + " is Even number.")
}
else{
    alert(num + " is Odd number.")
}

// Q-10

var temperature = prompt("Enter any Temperature number to check if it's hot or cold ");

if(temperature > 40){
    alert("It is too hot outside")
}
else if(temperature > 30){
    alert("the weather is normal today")
}
else if(temperature > 20){
    alert("Today's weather is cool")
}
else if(temperature > 10){
    alert("OMG !today's Weather is so cool")
}

// Q-11


var firstNumber = prompt("Enter the first number:");
var secondNumber = prompt("Enter the second number:");
var operation = prompt("Enter the operation (+, -, *, /, %):");

var result;
var isValid = true;


if (operation === "+") {
    result = firstNumber + secondNumber;
}
 else if (operation === "-") {
    result = firstNumber - secondNumber;
} 
else if (operation === "*") {
    result = firstNumber * secondNumber;
}
 else if (operation === "/") {
    if (secondNumber !== 0) {
        result = firstNumber / secondNumber;
    } else {
        result = "Error: Division by zero is not allowed.";
        isValid = false;
    }
} 
else if (operation === "%") {
    if (secondNumber !== 0) {
        result = firstNumber % secondNumber;
    } else {
        result = "Error: Division by zero is not allowed.";
        isValid = false;
    }
}
 else {
    result = "Error: Invalid operation selected.";
    isValid = false;
}


if (isValid) {
    alert("The result is: " + result);
    console.log("The result is: " + result);
}
 else {
    alert(result);
    console.log(result);
}