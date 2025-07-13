// Problem : This function finds the maximum value in an array of numbers
function findMax(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

var array = [4,5,2,1,6,3];
findMax(array);

// DOM: DOcument Object Model
// Browser needs DOM model to render HTML
// Need for DOM is to manipulate HTML elements dynamically
