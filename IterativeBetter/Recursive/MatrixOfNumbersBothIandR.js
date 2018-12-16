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
    '4',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

///

const N = +gets();

const buildLastRowRecursive = function (arr, a, count) {
    if (a === count * 2 - 1) {
        return a;
    }
    return arr.concat(a, buildLastRowRecursive(arr, a + 1, count));
}

const createMatrixRecursive = function (size) {
    
    if (size === 1) {
        return [[1]];
    }

    let previousResultArr = createMatrixRecursive(size - 1);

    let length = previousResultArr.length;
    for (let i = 0; i < length; ++i) {
        previousResultArr[i].push(size + i);
    }
    
    previousResultArr.push(buildLastRowRecursive([], size, size));

    return previousResultArr;
}

print(createMatrixRecursive(N).join('\n').replace(/,/g, " "));

/// Large problem - take an integer input "a" and return a square matrix of "a" rows and "a" columns where each consecutive row starts with 1..."a" and contains "a" consecutive integers

/// Base case - if a = 1 => return [1];
/// Base case + 1 - if a = 2 => 
console.time();
for (let row = 0; row < N ; ++row) {
    let strToBuild = "";
    for (let col = 0; col < N; ++col ) {
        strToBuild += col + row + 1 + " ";
    }
    console.log(strToBuild);
}
console.timeEnd();