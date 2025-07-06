// Functions and previous topics revision 

// Problem 1
function getbottle(money){
    quantity = Math.floor(money/70);
    return quantity;
}

var ask = prompt("Bottles of how much Money?");
getbottle(ask);
console.log(quantity + " bottles");

// Problem 2
alert("Celsius to Fahrenheit Converter");
var val = prompt("Give temperature in Celsius: ");
inFahrenheit = (val * 9/5) + 32;

alert("Fahrenheit temperature: " + inFahrenheit);

// Problem 3
var totalMarks = prompt("Enter your total marks");
var obtainedMarks = prompt("Enter your obtained marks");
var percentage = (obtainedMarks/totalMarks)* 100;
alert("Percentage obtained is: " + percentage);

// Problem 4
var string1 = prompt("First String: ");
var string2 = prompt("Second String: ");
if (string1.length > string2.length) {
    alert("First String length is greater");
}
else{
    alert("Second String length is greater");
}

// Problem 5
alert("BMI Calculator");
var height = prompt("Enter your height(in meters)");
var weight = prompt("Enter your weight(in kgs)");

var BMI = Math.floor(weight/ (height*height));

alert("BMI is: " + BMI);

// Problem 6
var ask = prompt("Enter number of days to convert it into weeks");
var weeks = Math.floor(ask/7);
var days = Math.max(0,ask % 7);
alert("Number of weeks are " + weeks + " and remaning days are " + days);

// Problem 7
function check(char) {
    char = char.toLowerCase();
    if ('aeiou'.includes(char)) {
        return "Vowel";
    } else if (char >= 'a' && char <= 'z') {
        return "Consonant";
    } else {
        return "Invalid character";
    }
}

console.log(check('E'));  
console.log(check('b'));  

// Problem 8
function greet(name){
    return "Welcome, " + name.toUpperCase() + "!";
}

console.log(greet("Navkiran"));

// Problem 9
function ageCategory(age) {
    if (age < 0) return "Invalid age";
    if (age < 13) return "Child";
    else if (age < 20) return "Teen";
    else if (age < 60) return "Adult";
    else return "Senior";
}

var userAge = parseInt(prompt("Enter your age:"));
console.log("You are a: " + ageCategory(userAge));

// Problem 10
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    }
    return false;
}

var days = prompt("Enter a year: ");
console.log(isLeapYear(days));

// Problem 11
function convertHours(hours) {
    var minutes = hours * 60;
    var seconds = minutes * 60;
    return hours + " hours = " + minutes + " minutes OR " + seconds + " seconds."; 
}

console.log(convertHours(3));