// Arrays, Loops

// Problem 1: List numbers from 1 to 100 with specific conditions without using loops
function listOfNumbers(x) {
    if (x == 100) {
        return;
    }
    else if ( (x % 3 == 0) && (x % 5 == 0)) {
        arr.push("Navkiran Kaur");
    }
    else if ((x % 3) == 0) {
        arr.push("Navkiran");
    }
    else if (x % 5 == 0) {
        arr.push("Kaur");
    } 
    else if (x == 13) {
        arr.push("Lucky Number");
    }
    else {
        arr.push(x);
    }

    listOfNumbers(x+1);
}
arr = [];
listOfNumbers(1);
console.log(arr);

arr = [];
var x = 1;

// Problem 2: List numbers from 1 to 100 with specific conditions using a while loop
while (x <= 100) {
    if ((x % 3 == 0) && (x % 5 == 0)) {
        arr.push("Navkiran Kaur");
    }
    else if (x % 3 == 0) {
        arr.push("Navkiran");
    }
    else if (x % 5 == 0) {
        arr.push("Kaur");
    }
    else {
        arr.push(x);
    }

    x++;
}

console.log(arr);

// Problem 3: Print lyrics of "99 Bottles of Beer"
function lyrics() {
    x = 99
    while (x >= 1) {
        console.log(x + " bottles of beer on the wall, " + x + " bottles of beer.");
        if(x-1 == 0) {
            console.log("Take one down and pass it around, no more bottles of beer on the wall.");
        } else {
            console.log("Take one down and pass it around, " + (x-1) + " bottles of beer on the wall.");
        }
        x--;
    }
}

lyrics();

// Problem 4: Print the first 10 numbers of the Fibonacci sequence
function fibonacci(n) {
    var a = 0;
    var b = 1;
    var count = 0;

    while (count < n) {
        console.log(a);
        var temp = a + b;
        a = b;
        b = temp;
        count++;
    }
}
fibonacci(10);

// Problem 5: Check if a number is prime
function isPrime(num) {
    if (num <= 1) {
        return false; 
    }
    var i = 2;
    while (i <= Math.sqrt(num)) {
        if (num % i === 0) {
            return false; 
        }
        i++;
    }
    return true;
}

var number = 31;
if (isPrime(number)) {
    console.log(number + " is a prime number.");
} else {
    console.log(number + " is not a prime number.");
}

// Problem 6: Compute the GCD of two numbers
function computeGCD(a, b) {
    while (b !== 0) {
        var c = b;
        b = a % b;
        a = c;
    }
    return a;
}
var num1 = 8;
var num2 = 4;
console.log("GCD of " + num1 + " and " + num2 + " is: " + computeGCD(num1, num2));

arr = [3,4,5,6,7,8];
for(var i = 1; i <= arr.length - 1; i++) {
    arr[i] *= arr[i-1];
}

console.log(arr);

// Problem 7: Guess the PIN: For loop can't be used here, While specific pronblem
var pin = 4092;
guessed = false;
while (!guessed) {
    var x = prompt("Guess the PIN: ");
    if (x == pin) {
        alert("The PIN is correct.");
        guessed = true;
    }
    else {
        alert("Wrong PIN, guess again.");
    }
}