const sumAll = function(first, last) {
    let sum = 0;
    if (first > last){
        [first, last] = [last, first]
    }
    if (first < 0 || last < 0 || typeof first === 'string' || typeof last === 'string' || Array.isArray(first) || Array.isArray(last)){
        return "ERROR";
    }

    for(let i = first; i <= last; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
