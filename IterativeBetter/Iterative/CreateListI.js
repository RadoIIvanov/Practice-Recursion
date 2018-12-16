const createListIterative = function (arr) {

    let list = null;
    for (let i = arr.length - 1; i >= 0  ; --i) {
        list = {value : arr[i], rest : list};
    }
    return list;
}
console.log(createListIterative([5,10,15]));

/// You have to start from the innermost case (the one that no children), so that you can reference it when building the other objects
/// this case coincides with the Base case for the recursion