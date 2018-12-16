function steamrollArray(arr) {
    // I'm a steamroller, baby
    if (typeof arr === "string" || typeof arr === "number") {
        return arr;
    }

    if (arr.length === 0 && arr instanceof Array) { ///// empty array
        return [];
    } 

    if (arr[0] === undefined && arr instanceof Object) { ///// empty object
        return {};
    }

    let firstElement = arr[0];
    let theRestOfArr = arr.slice(1, arr.length);
    
    return Array.prototype.concat(steamrollArray(firstElement), steamrollArray(theRestOfArr));
}

console.log(steamrollArray([1, {}, [3, [[4]]]]));

/// Large problem - take an array and return a flat version of the array, where if one of the elements of the array is an object, only take its elements, not the whole structure

/// Base case - when the array consists of one element (we cannot decrement the parameter more), however even in the base case we need help because the only element can be an object, so recurse
/// Each function call provides the first element to push into the array

