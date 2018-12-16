
const slowRecursiveFib = function (n) {

    if ( n <= 2 ) {
        return 1;
    }

    let firstOfLastTwoNumbers = n - 2;
    let secondOfLastTwoNumbers = n - 1;
    
    return slowRecursiveFib(firstOfLastTwoNumbers) + slowRecursiveFib(secondOfLastTwoNumbers);

}


const fastRecursiveFib = function (n, arr) {

    if (arr[n] === undefined) {

        if ( n <= 2) {
            return 1;
        }
        let firstOfLastTwoNumbers = n - 2;
        let secondOfLastTwoNumbers = n - 1;

        arr[n] = fastRecursiveFib(firstOfLastTwoNumbers, arr) + fastRecursiveFib(secondOfLastTwoNumbers, arr);

    }
    return arr[n];

}

/// Large problem - take a number n and return the n-th element from the Fibonnaci sequence, where each element is the sum of the previous 2 (first two elements 1, 1)

/// Base case - when n is smaller than 2 => return 1;
/// Base case + 1 - when n is 3 => (you are helpless) ask for help to get each of the previous numbers 

/// The relationship between the result of the Base case and Base case + 1 is determined by the structure of the output - in this case we are returning a number
/// that is the sum of the previous two (even though this is not a typical case since the Base case + 1 doesn't do any work)