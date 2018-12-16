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
    '6',
    '-26 -25 -28 31 2 27',	
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

///

const sizeOfArr = +gets();
const arr = gets().split(' ').map( (element) => Number(element));

const firstLargerThanNeighboursIndex = function (arr, position) {
    
    if (position > arr.length - 1 || arr.length === 0) {
        return - 1;
    }

    if (position === arr.length -1) {
        return arr.length - 1;
    }

    let currentElement = arr[position];
    let previousElement = arr[position - 1] !== undefined ? arr[position - 1] : -Infinity;
    let nextElement = arr[position + 1] !== undefined ? arr[position + 1] : -Infinity;
    if (currentElement > previousElement && currentElement > nextElement) {
        return position;
    }
    return firstLargerThanNeighboursIndex(arr, position + 1);
}

print(firstLargerThanNeighboursIndex(arr, 0));