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
    '8',
    '28 6 21 6 -7856 73 73 -56',
    '73',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

///
const sizeOfArr = +gets();
const arr = gets().split(' ');
const numberToLookFor = gets();

const foundXTimes = function (arr, numberToLookFor, counter) {

    if (arr.length === 0) {
        return counter;
    }
    let lastElement = arr[arr.length - 1];
    if (lastElement === numberToLookFor) {
        counter++;
    }
    let restOfArray = arr.slice(0, arr.length - 1);

    return foundXTimes(restOfArray,numberToLookFor,counter);
}
print(foundXTimes(arr,numberToLookFor, 0));