/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/
let arr = [3, 7, 2, 9, 1]

let max = arr[0]
function findLargestElement(numbers) {
    
    for(let i = 1;i<arr.length;i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }

    return max;
}

// module.exports = findLargestElement;
let res = findLargestElement(arr);

console.log(res)