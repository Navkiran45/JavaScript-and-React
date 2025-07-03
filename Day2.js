//Basics of Operators and Strings
//Problem 1
x = 20;

x += 10;
console.log("After addition: " + x);
x *= 10;
console.log("After multiplication: " + x);
x -= 10;
console.log("After subtraction: " + x);

//Problem 2
var a = 3;
var x = (100 + 50) * a;
console.log(x)


//Problem 3
var marks = prompt("Enter your marks: ");
var result = (marks >= 33) ? "Pass" : "Fail";
alert("Result: "+ result)

//Problem 4
var number = prompt("Enter a digit: ");
alert("during post increment: " + number++);
alert("After post increment: " + number);
alert("After pre increment: "+ ++number);

//Problem 5
var a = 2;
var b = 3;

console.log("Bitwise AND: " + (a & b));
console.log("Bitwise OR: " + (a | b));
console.log("Bitwise XOR: " + (a ^ b));

//Problem 6
var dogAge = prompt("Enter the age of Dog: ");
var humanAge = (dogAge-2) * 4 + 21;
alert("Human Age equivalent to Dog: " + humanAge);

//Problem 7
var x = 3;
var y = x++;
var z = x;
z += 1;

alert (z);

//Problem 8
var twitterBox = prompt("Enter greetings: ");
lengthOfTwitterBox = twitterBox.length;
console.log("You wrote "  + lengthOfTwitterBox + "characters." );
console.log("You are remaining with " + (500 - lengthOfTwitterBox) + " characters.");

//Problem 9
var twitterBox = prompt("Enter greetings: ");
lengthOfTwitterBox = twitterBox.length;
console.log("You wrote "  + lengthOfTwitterBox + " characters." );
console.log("You are remaining with " + Math.max(0, 150 - lengthOfTwitterBox) + " characters.");

alert(twitterBox.slice(0,151));
alert("Word Limit is 150 characters.");

//Problem 10
var check = prompt("Enter a Number: ");
if (check % 2 === 0) {
    alert("Number is even");}
else{
    alert("Number is odd");
}