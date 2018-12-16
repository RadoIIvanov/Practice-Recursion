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
    '10',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

///

const N = +gets();

const notDivisibleByThreeAndSeven = function (arr, a) {

    if (a < 1) {
        return arr;
    }

    if (!(a % 3 === 0 || a % 7 === 0)) {
        arr.unshift(a);
    }

    return notDivisibleByThreeAndSeven(arr, a - 1);

}

print(notDivisibleByThreeAndSeven([],N).join(" "));