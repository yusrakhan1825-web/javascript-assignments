// Q-1

function displayCurrentDateTime() {
    var currentDate = new Date();
    document.write("Current Date & Time: " + currentDate + "<br><br>");
}
displayCurrentDateTime();

// Q-2

function greetUser(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    alert("Hello, " + fullName + "! Welcome back.");
}
greetUser("John", "Doe");

// Q-3
function addTwoNumbers() {
    var firstNum = prompt("Enter the first number:");
    var secondNum = prompt("Enter the second number:");
    var sum = Number(firstNum) + Number(secondNum);
    return sum;
}
var result = addTwoNumbers();
document.write("The sum of the two numbers is: " + result);

// Q-4

function calculate(num1, num2, operator) {
    var result;
    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        result = num1 / num2;
    } else {
        result = "Invalid Operator";
    }
    document.write("Result of " + num1 + " " + operator + " " + num2 + " = " + result + "<br>");
    return result;
}
calculate(10, 5, "+"); 
calculate(8, 4, "*"); 

// Q-5

function squareNumber(num) {
    var square = num * num;
    document.write("The square of " + num + " is " + square + "<br>");
    return square;
}
squareNumber(5); 

// Q-6

function computeFactorial(num) {
    if (num < 0) return "Invalid input for factorial";
    if (num === 0 || num === 1) return 1;
    
    var factorialResult = 1;
    for (var i = num; i >= 1; i--) {
        factorialResult = factorialResult * i;
    }
    
    document.write("The factorial of " + num + " is " + factorialResult + "<br>");
    return factorialResult;
}
computeFactorial(5);

// Q-7

function displayCounting(startNum, endNum) {
    document.write("Counting from " + startNum + " to " + endNum + ":<br>");
    for (var i = startNum; i <= endNum; i++) {
        document.write(i + " ");
    }
    document.write("<br>"); 
}
displayCounting(1, 15); 

// Q-8

function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(num) {
        return num * num;
    }
    var baseSquare = calculateSquare(base);
    var perpendicularSquare = calculateSquare(perpendicular);
    var hypotenuseSquare = baseSquare + perpendicularSquare;
    var hypotenuse = Math.sqrt(hypotenuseSquare);
    document.write("Base: " + base + "<br>");
    document.write("Perpendicular: " + perpendicular + "<br>");
    document.write("Hypotenuse: " + hypotenuse + "<br>");
    
    return hypotenuse;
}
calculateHypotenuse(3, 4);

// Q-9

function calculateArea(width, height) {
    var area = width * height;
    document.write("The area of the rectangle is: " + area + "<br>");
    return area;
}
calculateArea(5, 10);
var rectWidth = 7;
var rectHeight = 12;
calculateArea(rectWidth, rectHeight); 

// Q-10

function checkPalindrome(str) {
    var cleanStr = str.toLowerCase();
    var reversedStr = cleanStr.split("").reverse().join("");
    if (cleanStr === reversedStr) {
        document.write("'" + str + "' is a palindrome.<br>");
        return true;
    } else {
        document.write("'" + str + "' is not a palindrome.<br>");
        return false;
    }
}
checkPalindrome("madam");
checkPalindrome("hello");

// Q-11

function capitalizeFirstLetters(str) {
    var words = str.split(" ");
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    var result = words.join(" ");
    document.write("Original: '" + str + "'<br>");
    document.write("Expected Output: '" + result + "'<br><br>");
    return result;
}
capitalizeFirstLetters("the quick brown fox");

// Q-12

function findLongestWord(str) {
    var words = str.split(" ");
    var longestWord = "";
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    document.write("Example String: '" + str + "'<br>");
    document.write("Expected Output: '" + longestWord + "'<br><br>");
    return longestWord;
}
findLongestWord("Web Development Tutorial");

// Q-13

function countLetterOccurrences(str, letter) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
       
        if (str.charAt(i) === letter) {
            count++;
        }
    }
    document.write("String: '" + str + "'<br>");
    document.write("Letter to count: '" + letter + "'<br>");
    document.write("Number of occurrences: " + count + "<br><br>");
    
    return count;
}
countLetterOccurrences('JSResourceS.com', 'o');

// Q-14

function calcCircumference(radius) {
   
    var circumference = 2 * Math.PI * radius;
    
   
    document.write("The circumference is " + circumference.toFixed(2) + "<br>");
    return circumference;
}
function calcArea(radius) {
    // Formula: pi * r^2
    var area = Math.PI * (radius * radius);
    document.write("The area is " + area.toFixed(2) + "<br>");
    return area;
}
var sampleRadius = 5;
calcCircumference(sampleRadius); 
calcArea(sampleRadius);      

