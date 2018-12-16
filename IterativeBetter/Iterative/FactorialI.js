const iterativeFactorial = function (n) {

    let total = 1;

    for (let i = 1; i <= n ; ++i) {
        total *= i;
    }
    return total;
}
console.log(iterativeFactorial(1));

/// Since the components of the multiplication are consecutive numbers, there is no uncertainty or logic to build(the parameters are directly the building blocks, no need to modify them)
/// so you just loop to get consecutive a counter for consecutive numbers and multiply