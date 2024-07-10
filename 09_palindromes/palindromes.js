const palindromes = function (string) {
    let reversedString = '';
    cleanString = string.toLowerCase().replace(/[^a-z0-9]/g, ''); 
    for (i = cleanString.length - 1; i >= 0; i--){
        reversedString += cleanString[i];
    }
    return cleanString === reversedString;
}
// Do not edit below this line
module.exports = palindromes;
