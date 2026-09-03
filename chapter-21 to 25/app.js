// Q-1
var firstName = prompt("Enter your first name;");
var lastName = prompt("Enter your last name;");

var fullName = firstName + "" + lastName ;
alert(" Hello , "+ fullName + " ;");

// Q-2
var favoritePhone = prompt("Enter your favorite phone model;");
var lenght = favoritePhone.length;
document.write("My favorite phone model is " + favoritePhone + "<br>");
document.write("Length of strings ; " + lenght );

// Q-3

var word = "pakistani";
var indexNum = word.indexof("n");
document.write("strings:" + "<br>");
document.write("index of 'n' " + indexNum);

// Q-4

var word = "Hello world";
var lastIndexNum = word.lastIndexOf("1");
document.write("strings" + word + "<br>");
document.write("last index of '1' ; " + lastIndexNum);

// Q-5
var word = "pakistani";
var character = word[3];
document.write("string:" + word + "<br>");
do

// Q-7


// Q-8
var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replace(/and/g, "&");
document.write("Original message: " + message + "<br><br>");
document.write("After replacement: " + newMessage);


// Q-9
var value1 = "472";
var type1 = typeof value1;
var value2 = Number(value1);
var type2 = typeof value2;
document.write("Value: " + value1 + "<br>");
document.write("Type: " + type1 + "<br>");
document.write("Value: " + value2 + "<br>");
document.write("Type: " + type2 + "<br>");

// Q-10
var userInput = prompt("Enter a word:");
var upperCase = userInput.toUpperCase();
document.write("User input: " + userInput + "<br>");
document.write("Upper case: " + upperCase);


// Q-11

var userInput = prompt("Enter a word:");
var firstChar = userInput[0].toUpperCase();
var restOfChars = userInput.slice(1).toLowerCase();
var titleCase = firstChar + restOfChars;
document.write("User input: " + userInput + "<br>");
document.write("Title case: " + titleCase);

// Q-12
var num = 35.36;
var numString = num.toString();
var resultString = numString.replace(".", "");
document.write("Number: " + num + "<br>");
document.write("Result: " + resultString);

// Q-13
var username = "";
var isValid = false;
while (!isValid) {
    username = prompt("Enter your username:");
    var hasSpecialChar = false;
    for (var i = 0; i < username.length; i++) {
        var code = username.charCodeAt(i);
        if (code === 33 || code === 44 || code === 46 || code === 64) {
            hasSpecialChar = true;
            break;
        }
    }
    if (hasSpecialChar) {
        alert("Please enter a valid username without special characters like [@ , . !]");
    } else {
        isValid = true;
    }
}
document.write("Your valid username is: " + username);

// Q-14
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
var searchItem = userInput.toLowerCase();

var found = false;
var indexNum = -1;
for (var i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === searchItem) {
        found = true;
        indexNum = i;
        break;
    }
}
if (found) {
    document.write(userInput + " is <b>available</b> at index " + indexNum + " in our bakery.");
} else {
    document.write("We are sorry. " + userInput + " is <b>not available</b> in our bakery.");
}

// Q15
var password = "";
var isValid = false;
while (!isValid) {
    password = prompt("Enter a password:\n- Must contain letters and numbers\n- Must not start with a number\n- Must be at least 6 characters long");
    if (password.length < 6) {
        alert("Password is too short! It must be at least 6 characters long.");
        continue; 
    }
    var firstCharCode = password.charCodeAt(0);
    if (firstCharCode >= 48 && firstCharCode <= 57) {
        alert("Password cannot start with a number!");
        continue;
    }
    var hasLetter = false;
    var hasNumber = false;

    for (var i = 0; i < password.length; i++) {
        var code = password.charCodeAt(i);
        if (code >= 48 && code <= 57) {
            hasNumber = true;
        }
        else if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
            hasLetter = true;
        }
    }
    if (!hasLetter || !hasNumber) {
        alert("Password must contain both letters and numbers!");
    } else {
        // If all conditions pass, break out of the loop
        isValid = true;
    }
}
document.write("Your valid password is: " + password);

// Q-16
var university = "University of Karachi";
var universityArray = university.split("");
for (var i = 0; i < universityArray.length; i++) {
    document.write(universityArray[i] + "<br>");
}


// Q-17
var userInput = prompt("Enter any word:");
var lastChar = userInput[userInput.length - 1];
document.write("User input: " + userInput + "<br>");
document.write("Last character of input: " + lastChar);


// Q-18
var text = "The quick brown fox jumps over the lazy dog";
var lowerText = text.toLowerCase();
var count = lowerText.split("the").length - 1;
document.write("Text: " + text + "<br>");
document.write("There are " + count + " occurrence(s) of word 'the'");

