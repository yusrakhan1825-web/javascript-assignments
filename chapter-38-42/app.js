// Q-1

function power(a, b) {
    var result = 1;
    for (var i = 0; i < b; i++) {
        result *= a;
    }
    
    document.write(a + " raised to the power of " + b + " is: " + result + "<br><br>");
    return result;
}
power(2, 3);

// Q-2

function checkLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        document.write(year + " is a leap year.<br><br>");
        return true;
    } else {
        document.write(year + " is not a leap year.<br><br>");
        return false;
    }
}
checkLeapYear(2012); 
checkLeapYear(2023); 

// Q-3

function calculateTriangleArea(a, b, c) {
    function calculateS(side1, side2, side3) {
        return (side1 + side2 + side3) / 2;
    }
    
    var S = calculateS(a, b, c);
    var areaSquare = S * (S - a) * (S - b) * (S - c);
    var area = Math.sqrt(areaSquare);
    
    document.write("The area of the triangle is: " + area.toFixed(2) + "<br><br>");
    return area;
}
calculateTriangleArea(3, 4, 5);

// Q-4

function calculateTriangleArea(a, b, c) {
    function calculateS(side1, side2, side3) {
        return (side1 + side2 + side3) / 2;
    }
    var S = calculateS(a, b, c);
    var areaSquare = S * (S - a) * (S - b) * (S - c);
    var area = Math.sqrt(areaSquare);
    
    document.write("The area of the triangle is: " + area.toFixed(2) + "<br><br>");
    return area;
}
calculateTriangleArea(3, 4, 5);

// Q-5

function customIndexOf(str, char) {
  
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            return i; 
        }
    }
    return -1;
}
document.write("Index of 'e' in 'hello': " + customIndexOf("hello", "e") + "<br>"); // Outputs: 1
document.write("Index of 'z' in 'hello': " + customIndexOf("hello", "z") + "<br><br>"); // Outputs: -1

// Q-6

function removeVowels(sentence) {
    if (sentence.length > 25) {
        return "Error: Sentence must not be more than 25 characters long.";
    }

    var cleanResult = "";
    var lowerSentence = sentence.toLowerCase();
    for (var i = 0; i < sentence.length; i++) {
        var char = lowerSentence.charAt(i);
        if (char !== 'a' && char !== 'e' && char !== 'i' && char !== 'o' && char !== 'u') {
            cleanResult += sentence.charAt(i); // Keep original casing for consonants
        }
    }

    return cleanResult;
}
var text = "Hello World";
document.write("Original: " + text + "<br>");
document.write("Without Vowels: " + removeVowels(text) + "<br><br>"); // Outputs: Hll Wrld

// Q-7

function countSuccessiveVowels(text) {
    var count = 0;
    var str = text.toLowerCase();
    for (var i = 0; i < str.length - 1; i++) {
        var char1 = str.charAt(i);
        var char2 = str.charAt(i + 1);
        switch (char1) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                // If char1 is a vowel, verify if char2 is also a vowel
                if (char2 === 'a' || char2 === 'e' || char2 === 'i' || char2 === 'o' || char2 === 'u') {
                    count++;
                    document.write("Found pair: " + text.charAt(i) + text.charAt(i + 1) + "<br>");
                }
                break;
            default:
                break;
        }
    }
    document.write("Total consecutive vowel pairs: " + count + "<br><br>");
    return count;
}
countSuccessiveVowels("Pleaase read this book immediately."); 

// Q-8

function convertToMeters(km) {
    var meters = km * 1000;
    document.write(km + " km = " + meters + " meters.<br>");
}
function convertToFeet(km) {
    var feet = km * 3280.84;
    document.write(km + " km = " + feet.toFixed(2) + " feet.<br>");
}
function convertToInches(km) {
    var inches = km * 39370.1;
    document.write(km + " km = " + inches.toFixed(2) + " inches.<br>");
}
function convertToCentimeters(km) {
    var cm = km * 100000;
    document.write(km + " km = " + cm + " centimeters.<br>");
}
var inputDistance = prompt("Enter distance between two cities in km:");
var kmValue = Number(inputDistance);

convertToMeters(kmValue);
convertToFeet(kmValue);
convertToInches(kmValue);
convertToCentimeters(kmValue);

// Q-9

function calculateOvertimePay(hoursWorked) {
    var regularHoursLimit = 40;
    var overtimeRate = 12.00;
    var overtimePay = 0;

    if (hoursWorked > regularHoursLimit) {
        var overtimeHours = hoursWorked - regularHoursLimit;
        overtimePay = overtimeHours * overtimeRate;
        document.write("Total hours worked: " + hoursWorked + "<br>");
        document.write("Overtime hours: " + overtimeHours + "<br>");
        document.write("Overtime Pay: Rs. " + overtimePay.toFixed(2) + "<br><br>");
    } else {
        document.write("Total hours worked: " + hoursWorked + "<br>");
        document.write("No overtime pay earned (worked 40 hours or less).<br><br>");
    }
    return overtimePay;
}
calculateOvertimePay(45); 

// Q-10

function calculateCurrencyNotes(amount) {
    var notes100 = Math.floor(amount / 100);
    var remainingAmount = amount % 100;
    var notes50 = Math.floor(remainingAmount / 50);
    remainingAmount = remainingAmount % 50;
    var notes10 = Math.floor(remainingAmount / 10);
    document.write("<h3>Amount to withdraw: Rs. " + amount + "</h3>");
    document.write("You will receive:<br>");
    document.write(notes100 + " note(s) of Rs. 100<br>");
    document.write(notes50 + " note(s) of Rs. 50<br>");
    document.write(notes10 + " note(s) of Rs. 10<br><br>");
}
calculateCurrencyNotes(470); 