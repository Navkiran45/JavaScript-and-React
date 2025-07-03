// Basics of variables and concatenation
//Problem 1
var age = 25;
console.log(age);

//Problem 2
var number = 20;
after = number - 1;
console.log(after);

//Problem 3
var a = 23;
var b = 20;
console.log(a+b);

//Problem 4
alert("Give length and width to evaluate the area of rectangle");
var length = prompt("Length of Rectangle:");
var width = prompt("Width of Rectangle:");
console.log("Area is: " + length*width);

//Problem 5
alert("Give radius to evaluate area of circle");
var radius = prompt("Radius of Circle:");
console.log("Area is: " + 3.14*radius*radius);

//Problem 6
var a = "Learning ";
var b = "is fun!";

console.log(a + b);

//Problem 7
var a = 6;
var b = "Hi";
console.log(a + " " + b);

//Problem 8
var name = "Navkiran";
var score = 90;
var message = name + " scored " + score + " marks.";
console.log(message);

//Problem 9
var firstName = prompt("Enter your First Name:");
var lastName = prompt("Enter your Last Name: ");
console.log(firstName + " " + lastName);

//Problem 10
console.log("20" + 5);
console.log(10 + "5");
console.log("10" + "10");
console.log(5 + 5);

//Problem 11
var name = prompt("Your Good Name: ");
var timeofDay = prompt("What is the time of Day (Morning/afternoon/Evening)");
console.log("Good " + timeofDay + " " + name + "!")
timeofDay.length;

//Problem 12
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name: ");

alert( firstName.slice(0,1).toUpperCase() + firstName.slice(1).toLowerCase() + " " + lastName.slice(0,1).toUpperCase() + lastName.slice(1).toLowerCase() );
