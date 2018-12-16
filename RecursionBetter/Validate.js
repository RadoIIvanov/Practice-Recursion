const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = [
    1,
    '(*)',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

/////
let numberOfExpressions = +gets();
let arrOfExpressions = [];
for (let i = 0; i < numberOfExpressions; ++i) {
    arrOfExpressions.push(gets());
}

const validateExpression = function (expression, index,  currentCounter) {

    if (index >= expression.length) {
        return currentCounter === 0;
    }

    if (currentCounter < 0) {
        return false;
    }

    let currentElement = expression.charAt(index) 

    if (currentElement === "(") {
        return validateExpression(expression, index + 1, currentCounter + 1);
    } else if (currentElement === ")") {
        return validateExpression(expression, index + 1, currentCounter - 1);
    }
    if (currentElement === "*") {
        return validateExpression(expression, index + 1, currentCounter + 1) || validateExpression(expression, index + 1, currentCounter - 1) || validateExpression(expression, index + 1, currentCounter);
    }
    return validateExpression(expression, index + 1, currentCounter);
}

arrOfExpressions.forEach( (expression) => {
    if (validateExpression(expression, 0, 0)) {
        print('yes');
    } else {
        print('no');
    }
});

