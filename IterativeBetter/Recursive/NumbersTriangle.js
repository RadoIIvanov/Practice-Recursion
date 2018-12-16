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
    '5',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

///

const N = +gets();

const createTriangleRecursive = function (size) {

    if (size === 1) {
        return [[1]];
    }
    
    let previousResultsArr = createTriangleRecursive(size - 1);
    
    let newResultsArr = [];
    
    for (let i = 0; i < previousResultsArr.length; ++i) {
        
        if ( i + 1 === Math.ceil(previousResultsArr.length / 2)) {
            newResultsArr.push([...previousResultsArr[Math.floor(previousResultsArr.length / 2)]]);
        }

        newResultsArr.push([...previousResultsArr[i]]);
        if (i === Math.floor(previousResultsArr.length / 2)) {
            newResultsArr[newResultsArr.length - 1].push(size);
        }

        if (i === Math.floor(previousResultsArr.length / 2)  ) {
            newResultsArr.push([...previousResultsArr[Math.floor(previousResultsArr.length / 2)]]);
        }
    }
    return newResultsArr;
}

print(createTriangleRecursive(N).join('\n').replace(/,/g, " "));