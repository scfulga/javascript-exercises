const getTheTitles = function(arr) {
    const titles = [];

    for(i = 0; i < arr.length; i++){
        titles.push(arr[i].title);
    }
    return titles;
}; 

// Do not edit below this line
module.exports = getTheTitles;
