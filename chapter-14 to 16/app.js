// Q-1  JS literal notation 
var studentName = [];

// Q-2  JS object notation 
var studentName2 = new Array();

// Q-3  String array
var names =["yusra","azra","junaid"] ;

// Q-4 number array
var number = ;

// Q-5 Boolean arrays
var classes = [true,false ,true];

// Q-6 mixed arrays
var mixed = ["yusra","june",25,true,false ,null,undefined];

// Q-7 eductaional qualifications shows in browser.
var qualifications = ["SSC","HSC","BSC","BS","BCOM","MS","M.PHIL","PHD"];
document.write(<h2>Qualifications</h2>);
for (var i = 0; i < qualifications.length; i++){
    document.write((i + 1)+")" + qualifications[i] + "<br>");
}

// Q-8

var studentNames = ["azra", "yusra", "hunza"];

var studentScores =;

var totalMarks = 500;
 // Calculate percentage: (obtained marks / total marks) * 100
for (var i = 0; i < studentNames.length; i++) {
    var percentage = (studentScores[i] / totalMarks) * 100;
    document.write("Score of " + studentNames[i] + " is " + studentScores[i] + ". Percentage: " + percentage + "%<br>");
}

// 9

var colors = ["Red", "Green", "Blue"];
document.write("<strong>Initial Array:</strong> " + colors + "<br><br>");

// a. Ask user to add a color to the beginning
var colorToBeginning = prompt("Enter a color to add to the beginning:");
colors.unshift(colorToBeginning);
document.write("<strong>a. Added to beginning:</strong> " + colors + "<br><br>");

// b. Ask user to add a color to the end
var colorToEnd = prompt("Enter a color to add to the end:");
colors.push(colorToEnd);
document.write("<strong>b. Added to end:</strong> " + colors + "<br><br>");

// c. Add two more colors to the beginning
colors.unshift("Yellow", "Purple");
document.write("<strong>c. Added two more to beginning:</strong> " + colors + "<br><br>");

// d. Delete the first color
colors.shift();
document.write("<strong>d. Deleted first color:</strong> " + colors + "<br><br>");

// e. Delete the last color
colors.pop();
document.write("<strong>e. Deleted last color:</strong> " + colors + "<br><br>");

// f. Ask user for index and color name to add at that position
var targetIndex = parseInt(prompt("Enter the index position where you want to add a color:"));
var newColorName = prompt("Enter the color name to add at that index:");
colors.splice(targetIndex, 0, newColorName);
document.write("<strong>f. Added color at index " + targetIndex + ":</strong> " + colors + "<br><br>");

// g. (Standard continuation) Ask user index and how many colors to delete
var deleteIndex = parseInt(prompt("Enter the index from where you want to delete color(s):"));
var deleteCount = parseInt(prompt("Enter how many colors you want to delete:"));
colors.splice(deleteIndex, deleteCount);
document.write("<strong>g. Removed " + deleteCount + " color(s) from index " + deleteIndex + ":</strong> " + colors + "<br>");
// f
var colors = ["Red", "Green", "Blue", "Yellow"];

var index = +prompt("Enter the index where you want to add a color:");
var color = prompt("Enter color name:");

colors.splice(index, 0, color);

document.write("Updated Colors: " + colors);

// g

var colors = ["Red", "Green", "Blue", "Yellow", "Pink"];

var index = +prompt("Enter the index from where you want to delete:");
var number = +prompt("How many colors do you want to delete?");

colors.splice(index, number);

document.write("Updated Colors: " + colors);

// Q-10

var scores = [320, 230, 480, 120];

document.write("Scores of Students: " + scores + "<br>");

scores.sort(function(a, b) {
    return a - b;
});

document.write("Ordered Scores of Students: " + scores);


// Q-11

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

var selectedCities = cities.slice(2, 5);

document.write("Cities list: " + cities + "<br><br>");
document.write("Selected cities list: " + selectedCities);


// Q-12

var arr = ["This", "is", "my", "cat"];

var str = arr.join(" ");

document.write("Array: " + arr + "<br><br>");
document.write("String: " + str)

// Q-13

var queue = [];

queue.push("Apple");
queue.push("Banana");
queue.push("Mango");
queue.push("Orange");

document.write("Queue: " + queue + "<br><br>");

var first = queue.shift();

document.write("Removed value: " + first + "<br>");
document.write("Remaining Queue: " + queue);