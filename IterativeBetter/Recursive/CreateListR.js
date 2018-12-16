const createList = function (arr) {

    if (arr.length === 1) {
        return {value : arr[0] , rest : null};
    }

    return {value : arr[0] , rest : createList(arr.slice(1))}

}

console.log(createList([4,8]));

//// Large problem - take the array and create an object of nested objects, each with a value property = element and a pointer property to the next object

//// Base case - when the array has only one element => return an object with value = first element and rest = null (the next element produces uncertainty)
//// Base case + 1 - when the array is of length two => return an object with value = first element and rest ask for help from the base case

/// The relationship between the result of the Base case and Base case + 1 is determined by the structure of the output - in this case we are returning an object
/// consisting of nested objects in the rest property 
