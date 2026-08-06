// Q-1

var letter = prompt("Enter a character (number, uppercase, or lowercase letter):");

if (letter >= "0" && letter <= 9) {
        console.log("its a number.");
    } 
    else if (letter >= "A" && letter <= "Z") {
        console.log("its s uppercase letter.");
    }
     else if (letter >= "a" && letter <= "z") {
        console.log("is a lowercase letter.");
    }
     else {
        console.log(" is a special character or symbol.");
    }
    


// Q-2

var num1 = prompt("Enter the first integer:");
var num2 = prompt("Enter the second integer:");


if (num1 > num2) {
    alert("The larger number is: " + num1);
} else if (num2 > num1) {
    alert("The larger number is: " + num2);
} else {
    alert("Both integers are equal.");
}

// Q-3

var number = prompt("Enter a number:");
if (number > 0) {
    alert("The number is positive.");
} else if (number < 0) {
    alert("The number is negative.");
} else if (number === 0) {
    alert("The number is zero.");
} else {
  alert("Invalid numeric input.");
}

// Q-4

var vowels = prompt("write a character to find out its vowel or not!");
if (vowels == "a" || "e" || "i" || "o" || "u"){
    alert("it is an vowel.")
} else {
    alert("it is not vowel.")
}


// Q-5

var correctPassword = "yusrakhan11";
var userPassword = prompt("Please enter your password:");
if(userPassword === correctPassword) {
   alert("Correct! The password you entered matches the original password.");
} else {
    alert("Incorrect password");
}

// Q-6

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

// Q-7


var time = prompt("Enter time in 24-hour clock format (e.g., 1900 for 7 PM):");
if (time >= 0000 && time < 1200) {
    alert("Good morning!");
} else if (time >= 1200 && time < 1700) {
    alert("Good afternoon!");
} else if (time >= 1700 && time < 2100) {
    alert("Good evening!");
} else if (time >= 2100 && time <= 2359) {
    alert("Good night!");
} else {
    alert("Invalid time!");
}