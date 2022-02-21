const reverseString = function(string) {
    let splitString = string.split('');
    let newString = [];
    for (let i = 0; i < string.length; i++){
        newString.unshift(splitString[i])
    }
    return newString.join('');
    // create an empty string
    // iterate from the end of the given string and add each letter to the empty string.
    // return the newly created string
};

// Do not edit below this line
module.exports = reverseString;
