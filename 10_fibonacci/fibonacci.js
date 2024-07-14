const fibonacci = function(num) {
    num = Number(num);
    if (num === 0) return 0;
    if (num === 1 || num === 2) return 1; 
    if (num < 0) return "OOPS";

    fibNumbers = [1, 1];
    currentNumber = 0;
    
    for (i = 2; i < num; i++){
        currentNumber = fibNumbers[0] + fibNumbers[1];
        fibNumbers[0] = fibNumbers[1];
        fibNumbers[1] = currentNumber;
    }
    
    return currentNumber;
};

// Do not edit below this line
module.exports = fibonacci;
