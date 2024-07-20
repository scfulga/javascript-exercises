const findTheOldest = function(people) {
    let oldestAge = 0; 
    let oldestPerson = null; 

    for(i = 0; i < people.length; i++){
        let currentPerson = people[i];
        let currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        if(currentAge > oldestAge){
            oldestPerson = currentPerson;
            oldestAge = currentAge;
        }
    }
    return oldestPerson;
};

function getAge(birth, death) {
    if(!death) {
        return new Date().getFullYear() - birth;
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
