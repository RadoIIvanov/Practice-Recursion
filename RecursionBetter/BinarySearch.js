let someArr = [1,5,10,2,3,11,7,8];
let sortedArr = someArr.sort( (a, b) => a - b);
let target = 3; ////// find the index of the target value in the array, if no such element in the array return -1;
console.log(sortedArr);   

const binarySearchRecursive = function (arr, begIndex, endIndex, target) {

    let mid = Math.floor((begIndex + endIndex)/2);

    if (arr[mid] === target ) {
        return mid;
    }

    if (begIndex === endIndex) {
        return -1;
    }

    if (arr[mid] < target) {
        return binarySearchRecursive(arr, mid + 1, endIndex, target);
    }

    if (arr[mid] > target) {
        return binarySearchRecursive(arr, begIndex, mid - 1, target);
    }

}
console.log(binarySearchRecursive(sortedArr,0, sortedArr.length - 1, target));

//// Large problem - take an array and a target and return the position of the target in the array, return -1 if the array has no element === target

/// Base case - when array is of length 1 => return the index if target matches arr[0] or return -1 if it doesn't
////////////////////////////////////////////////// however we need the original index, so we cannot reduce the array all the time
///////////////////////////////////////////////// instead we can add parameters to reduce our scope to 1 mid index and check that element
///////////////////////////////////////////////// we hone in - updating the parameters depending on the case (argument mid updates the one, to make sure we don't go back to the place part of the array where the target is not present)
