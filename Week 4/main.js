function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function() {
        return this.dob.getFullYear();
    }
}

Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
    return {this.firstName} {this.lastName};
}


// Class
class Person {
    constructor(firstName, lastName, dob) {
        this.fristName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
}

getBirthYear(){
    return this.AudioBuffer.getfullYear();
}

getFullName() {
    return {this.firstName} {this.lastName};
}


// Instrument object
const person1 = new Person('John', 'Doe', '4-3-1900');
const person2 = new Person('Mary', 'Smith', '3-6-1970');

console.log(person2.getfullName());
console.log(person1);


