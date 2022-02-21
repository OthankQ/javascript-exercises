const sumAll = function(num1, num2) {
    // If any arg is lesser than 0, return 'ERROR'
    if (num1 < 0 || num2 < 0 || typeof(num1) !== 'number' || typeof(num2) !== 'number') {
        return 'ERROR';
    }
    // Assign beginning and end depending on which is bigger
    let beginningNum;
    let endNum;
    if (num1 > num2) {
        beginningNum = num2;
        endNum = num1;
    } else {
        beginningNum = num1;
        endNum = num2;
    }

    // Loop through and add to counter
    let counter = 0;
    for (let i = beginningNum; i <= endNum; i++) {
        counter += i;
    }

    return counter;
};

// Do not edit below this line
module.exports = sumAll;
