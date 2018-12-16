
const totalCombinations = (a, b) => {

    if (a < b) {
        return 0;
    }

    if (a === b || !b) {
        return 1;
    }


    return totalCombinations(a - 1, b) + totalCombinations( a - 1, b - 1);
}
console.log(totalCombinations(12,10));

//// Large problem - take numbers a and b => return the total amount of ways you can choose "b" number of objects from an "a" number objects 

//// Base case - when a === b || b === 0 => return 1 (from the general combinatorics formula)
//// Base case + 1 -  a = 2, b = 1 => ask for help from the base cases, this case is the summation of the 2 base cases

/////// The relationship between the results of Base and Base + 1 is determined by the structure of the output we need to produce - in this case
//// we are a number representing the combinations combined with the plus operator


//// write a DP version of the algorithm because we are repeating ourselves