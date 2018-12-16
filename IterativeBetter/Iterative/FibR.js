
const fibIterative = function (n) {

    let firstFib = 1;
    let secondFib = 1; 
    let nextFib;
    for (let i = 3; i <= n; ++i) {

        nextFib = firstFib + secondFib;

        firstFib = secondFib;
        secondFib = nextFib;

    }
    return nextFib;
}