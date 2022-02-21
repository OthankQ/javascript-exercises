const removeFromArray = function(...args) {
    // Store the first argument in a new variable.
    let originalArray = args[0];
    let newArray = originalArray;
    for (let i = 1; i < args.length; i++) {
        newArray = newArray.filter((element) => {
            return element !== args[i];
        })
    }
    return newArray;
    // for each of the arguments starting from the second one, filter 
    // the element from the passed in first array argument and return
    // the final result.
};

// Do not edit below this line
module.exports = removeFromArray;
