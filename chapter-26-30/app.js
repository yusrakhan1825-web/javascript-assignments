// Q-1
var number = parseFloat(prompt("Enter a positive decimal number:"));
if(!isNaN(number)&& number > 0){
    var roundValue = Math.round(number);
    var floorValue = Math.floor(number);
    var cielValue = Math.ceil(number);
    document.write("number:" + number + "<br>");
    document.write("round off value" + roundValue + "<br>");
    document.write("floorValue" + floorValue + "<br>");
    document.write("ceilValue" + cielValue + "<br>");
}
else{
    document.write("Please enter a valid positive number.");
}

// Q-2
var userInput = prompt("Enter a negative floating-point num (e.g; -3.75");
var num = parseFloat(userInput);
if(!isNaN(num)&& num <0){
    var roundValue = Math.round(num);
    var floorValue = Math.floor(num);
    var ceilValue = Math.ceilValue(num);
}
else{
    alert("Invalid Input ! please enter a valid negative floating-point number")
}

// Q-3
var userInput = prompt("Enter a number to find its absolute value");
var num = Number(userInput);
if(!isNaN(num)){
    var absolute = Math.abs(num);
    Document.body.innerHTML = "<h1>the absolute value of " + num + "is" + absValue + "</h1>";

}
else{
      alert("Invalid Input ! please enter a valid number")
}

// Q-4
var diceValue = Math.floor(Math.random()*6)+1;
document.body.innerHTML = "<h1>random dice value: " + diceValue + "</h1>";

// Q-5
var coinValue = Math.floor(random() * 2)+ 1;
if(coinValue === 2 ){
    document.write("<h2>random coin value : Heads </h2>");

}
else{
    document.write("<h1>random coin value: Tails </h1>");
}

// Q-6
var randomNumber = Math.floor(Math.random()*100)+ 1;
document.write("random Number between 1 and 100: " + randomNumber);


// Q-7

var weight = prompt("Enter your weight in kilograms");
var parsedWeight = parseFloat(weight);
document.write("Your weight is: " + parsedWeight + " kilograms");

// Q-8
var secretNumber = Math.floor(Math.random() * 10) + 1;
var userNumber = Number(prompt("Enter a number between 1 and 10"));

if (userNumber === secretNumber) {
    alert("Congratulations!");
} else {
    alert("Try again!");
}
