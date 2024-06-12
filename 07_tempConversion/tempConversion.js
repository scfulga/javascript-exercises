const convertToCelsius = function(degrees) {
    let number = (degrees - 32) * 5/9;
    let result = parseFloat(number.toFixed(1));
    return result;

};

const convertToFahrenheit = function(degrees) { 
    let number = (degrees * (9/5)) + 32; 
    let result = parseFloat(number.toFixed(1));
    return result;
    
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
