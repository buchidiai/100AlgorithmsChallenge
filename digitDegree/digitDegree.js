function digitDegree(n) {
    if (n < 10) {
        return 0;
    }
    var result = 0;
    var arrayNumbers;
    var reducer = function (accumulator, currentValue) { return accumulator + currentValue; };
    console.log(n);
    while (result !== 1) {
        arrayNumbers = numberToArray(n);
        console.log(arrayNumbers);
        if (arrayNumbers.length > 1) {
            console.log(arrayNumbers);
            result = arrayNumbers.reduce(reducer);
            console.log(result);
            if (result >= 10) {
                arrayNumbers = numberToArray(result);
                result = arrayNumbers.reduce(reducer);
                return result;
            }
        }
    }
    return result;
}
function numberToArray(n) {
    return Array.from(String(n), Number);
}
// console.log(digitDegree(5));
//console.log(digitDegree(10));
//console.log(digitDegree(91));
console.log(digitDegree(100));
console.log(digitDegree(200));
