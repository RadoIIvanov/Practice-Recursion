
const reverseStr = function (str) {

    if (str.length === 1) {
        return str;
    }

    let lastElement = str.charAt(str.length - 1);
    let strMinusLastElement = str.substring(0, str.length - 1);

    return lastElement + reverseStr(strMinusLastElement); 
}

/// Large problem - take a string and return a new string that is a reversed version of it 

/// Base case(parameter is the smallest) - when the string has a length of 1 => just return it (only own work)
/// Base case + 1(increase parameter) => when the string has length 2 => return the last letter and ask for help for the rest of the problem (make sure own work + help)

/// The relationship between the results of Base case and Base + 1 is determined by the structure of needed output - in this case we are returning a string
/// and we can concat the pieces using the addition operator

const reverseArr = function (arr) {

    if (arr.length === 0) {
        return [];
    }

    if (arr.length === 1) {
        
        return arr[0];

    }

    let lastElement = arr[arr.length - 1];
    let arrMinusLastElement = arr.slice(0, arr.length - 1);
    
    return Array.prototype.concat(lastElement, reverseArr(arrMinusLastElement));

}
console.log(reverseArr(["a","b","c","d"]))

/// 1st version Assume that each element of the array is a primitive value and you don't have to reverse the components of each element
/// Large problem - take an array and return a new Arr that is a reversed version of it

/// Base case - when the array is of length 1 => just return the last/first element
/// Base case + 1 => when the array is of length 2 => return the last element and ask for help for the rest of the problem

/// The relationship between the result of the Base case and Base case + 1 is determined by the structure of the output - in this case we are returning an array
/// and we can concat the pieces using the concat method that concat the elements of separate arrays

const reverseNestedArr = function (arr) {

    if (typeof arr === 'number' || typeof arr === 'string') {   ////// 1 primitive value
        return arr;
    }
    
    if (arr.length === 0 && arr instanceof Array) { ///// empty array
        return [];
    } 

    if (arr[0] === undefined && arr instanceof Object) { ///// empty object
        return {};
    }

    let lastElement = arr[arr.length - 1];
    let arrMinusLastElement = arr.slice(0, arr.length - 1);

    return Array.prototype.concat(reverseNestedArr(lastElement), reverseNestedArr(arrMinusLastElement));

}

console.log(reverseNestedArr([1,{},[2,[4,3],5],[2,{},1,{},3]]));

/// 2nd version each element of the array can be a reference value (aka array/object)

/// Large problem - take an array and return a new Arr that is a reversed version of it

/// Base case(smallest parameter) - when the arr is of length 1 and its element is primitive => just return the first/last element
//////////////////////////(this is only a subset of the problem when arr is of length 1, for the other scenarios we need help) 
//////////////////////////because there is uncertainty we recurse for the last element component as well 
/// Base case + 1 => when the array is of length 2 => recurse for the last element and ask for help for the rest of the problem from the Base Case

/// The relationship between the result of the Base case and Base case + 1 is determined by the structure of the output - in this case we are returning an array
/// and we can concat the pieces using the concat method that concat the elements of separate arrays