
const recursiveFactorial = function (n) {

    if ( n <= 1) {
        return 1;
    }

    return n * recursiveFactorial (n - 1)

}
//// Large problem - take a large parameter and return the result of the multiplication of all the positive numbers up to this number (including)

//// Base case - when the parameter is <= 1 => return 1
//// Base case - when parameter is 2 => return the parameter value and ask for help from the Base case

//// The relationship between the results of Base and Base + 1 is determined by the structure of the output we need to produce - in this case
//// we are return a result of multiplication of numbers, so we use the * operator

