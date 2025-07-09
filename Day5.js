// Basics of Arrays

// // Problem 1: Find the second largest element in an array
function secondLargest(arr) {
    var n = arr.length;
    arr.sort((a, b) => a - b);
    for (var i = n - 2; i >= 0; i--) {
        if (arr[i] !== arr[n - 1]) {
            return arr[i];
        }
    }
    return -1;
}
console.log(secondLargest([12, 1, 34, 34, 1]));

// Problem 2: Find the maximum consecutive elements in an array
function maxConsecutive(arr) {
    maxCount = 0;
    count = 1;
    n = arr.length;
    for (var i = 1; i < n; i ++){
        if (arr[i] === arr[i+1]){
            count +=1;
        } else {
            maxCount = Math.max(maxCount, count);
            count = 1;
        }
    }
    return Math.max(maxCount, count);
}

console.log(maxConsecutive([0,1,0,0,1,1,1,1]));

// Problem 3: Move all zeros to the end of an array
function zerosAtEnd(arr){
    n = arr.length;
    count = 0

    for (var i=0; i <n; i++){
        if (arr[i] != 0){
            arr[count] = arr[i];
            count += 1;
        }
    }

    while (count < n){
        arr[count] = 0;
        count +=1;
    }
    return arr;
}

console.log(zerosAtEnd([1,2,0,1,9,0,2,3]));

// Problem 4: Remove all occurrences of a specific element from an array
function removeElement(arr, ele) {
    var k = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== ele) {
            arr[k] = arr[i];  
            k++;             
        }              
    }
    arr.length = k
    return {k, arr};
}
var result = removeElement([0,2,3,0,2,4,2,4,1], 2);
console.log("Count:", result.k);
console.log("Array:", result.arr);  

// Problem 5: Find leaders in an array
function leaders(arr) {
    var result = [];
    var n = arr.length;
    for (var i = 0; i < n; i++) {
        var j;
        for (j = i + 1; j < n; j++) {
            if (arr[i] < arr[j])
                break;
        }
        if (j === n)
            result.push(arr[i]);
    }
    
    return result;
}
var result = leaders([16, 17, 4, 3, 5, 2]);
console.log(result);