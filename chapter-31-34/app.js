// Q-1
var currentDate = new Date();
document.write(currentDate);

// Q-2
var monthNames = ["January","February","March","April","May","June","July","September","October","November","December"];
var currentDate = new Date();
var currentMonth = currentDate.getMonth();
var currentMonthName = monthNames[currentMonth];
alert("Current Month " + currentMonthName);

// Q-3
var dayNames = ["Sun","Mon","Tue","Wed","Fri","Sat"];
var currentDate = new Date();
var currentDay = currentDate.getDay();
var shortDayNames = dayNames[currentDay];
alert("Today is " + shortDayNames);

// Q-4
var currentDate = new Date();
var currentDay = currentDate.getDay();
if(currentDate === 0 || currentDay === 6){
    document.write("<br> Its fun day !");

}else{
    document.write("<br> Its a regular week day!")
}

// Q-5
var currentDate  = new Date();
var dayOfMonth = currentDate.getDate();
if(dayOfMonth < 16){
    document.write(" <br>first fifteen days of month");

}else{
    document.write(" <br>last days of month")
}

// Q-6
var currentDate = new Date();
var elapsedMilliSeconds = currentDate.getTime();
var elapsedMinutes = elapsedMilliSeconds / (1000 * 60);
document.write("current date  " + currentDate + "<br>")
document.write("elapsed millisecond since January 1, 1970" + elapsedMilliSeconds + "<br>");
document.write("elapsed minutes since JAnuary 1, 1970 " + elapsedMinutes + "<br>");

// Q-7
var currentDate = new Date();
var currentHour = currentDate.getHours();
if(currentHour < 12){
    alert("Its AM");
}else{
    alert("Its PM")
}

// Q-8
var laterDate = new Date(2020 , 11 , 31);
document.write("Later Date : " + laterDate);

// Q-9
var ramadanStartDate = new Date(2015, 5, 18);
var todayDate = new Date();
var timeDiffrence = todayDate.getTime() - ramadanStartDate.getTime();
var dayDiffrence = timeDiffrence / (1000 * 60 *60 * 24);
var wholday = Math.floor(dayDiffrence);
alert(wholday + "days have passed since 1st Ramadan ,2015");

// Q-10
var referenceDate = new Date(2015, 11, 5, 22, 50, 16);
var startOf2015 = new Date(2015, 0, 1, 0, 0, 0);
var timeDifference = referenceDate.getTime() - startOf2015.getTime();
var elapsedSeconds = timeDifference / 1000;
document.write("On reference date " + referenceDate + ", <br>");
document.write(elapsedSeconds + " seconds had passed since beginning of 2015");

// Q-11
var currentDate = new Date();
document.write("current date: " + currentDate + "<br>");
currentDate.setHours(currentDate.getHours() - 1);
document.write("1 hour ago, it was " + currentDate);

// Q-12
var currentDate = new Date();
var initialDateString = currentDate.toString();
currentDate.setFullYear(currentDate.getFullYear() - 100);
alert("current date: " + initialDateString + "\n100 years back, it was " + currentDate);

// Q-13
var userAge = prompt("Please enter your age:");
var currentYear = new Date().getFullYear();
var birthYear = currentYear - Number(userAge);
document.write("Your age is " + userAge + "<br>");
document.write("Your birth year is " + birthYear);

// Q-14
var customerName = "ABC Customer";
var numberOfUnits = 410;
var chargesPerUnit = 16;
var latePaymentSurcharge = 350;
var monthNames = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
];
var currentMonth = monthNames[new Date().getMonth()]; 
var netAmountPayable = numberOfUnits * chargesPerUnit;
var grossAmountPayable = netAmountPayable + latePaymentSurcharge;
document.write("<h1>K-Electric Bill</h1>");
document.write("<p><b>Customer Name:</b> " + customerName + "</p>");
document.write("<p><b>Month:</b> " + currentMonth + "</p>");
document.write("<p><b>Number of units:</b> " + numberOfUnits + "</p>");
document.write("<p><b>Charges per unit:</b> " + chargesPerUnit.toFixed(2) + "</p>");
document.write("<br>");
document.write("<p><b>Net Amount Payable (within Due Date):</b> " + netAmountPayable.toFixed(2) + "</p>");
document.write("<p><b>Late payment surcharge:</b> " + latePaymentSurcharge.toFixed(2) + "</p>");
document.write("<p><b>Gross Amount Payable (after Due Date):</b> " + grossAmountPayable.toFixed(2) + "</p>");