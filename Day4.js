// Functions and basics of Arrays

// Problem 1: GST Calculator
function gstCalculator(baseAmount) {
    baseAmount = Number(baseAmount);
    var gst = baseAmount * 0.18;
    var total = baseAmount + gst;
    return Math.floor(total);  
}
console.log("Type of base amount: " + typeof(baseAmount));
console.log("Type of gst: " + typeof(gst));
var bill = prompt("Enter the base amount:");
console.log("Total bill after 18% GST: ₹" + gstCalculator(bill));


// Problem 2: Use of === operator
var first = 1;
var second = "1";

function resultTrue () {
    return true;
}

if (first === second) {
    resultTrue();
} else {
     false;
}

// Problem 3: Use of Array.includes() method
var guestList = ["Jiya", "John", "Joe", "David", "Doe" ];
var guestName = prompt("Enter Guest Name: ");

if (guestList.includes(guestName)) {
    console.log("Welcome " + guestName);
}
else {
    console.log("Sorry, " + guestName + " You are in a wrong place.");
}

// Problem 4: Remove Duplicates from an Array
function removeDuplicate(arr) {
    var resultantArray = [];
    for (var i = 0; i <arr.length; i++) {
        if(!resultantArray.includes(arr[i])) {
            resultantArray.push(arr[i]);
        }
    }
    return resultantArray;
}

console.log(removeDuplicate([1,2,1,2,1,3,4,3]));


// Problem 5: Rotate an Array
function rotateArray(nums, k) {
    var rotated = nums.slice(-k).concat(nums.slice(0, nums.length - k));
    return rotated;
}

console.log(rotateArray([1,2,3,4,5,6] , 3));
