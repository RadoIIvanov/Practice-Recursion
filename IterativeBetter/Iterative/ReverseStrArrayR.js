const reverseStrIterative = function (str) {

    let newStr = "";

    for (let i = str.length - 1; i >= 0; --i) {

        newStr += str.charAt(i);

    }
    return newStr;
}

const reverseArrIterative = function (arr) {

    let newArr = [];

    for (let i = arr.length - 1; i >= 0 ; --i) {

        newArr.push(arr[i]);

    }

    return newArr;
}

console.log(reverseArrIterative([1,2,3,4,5]));
