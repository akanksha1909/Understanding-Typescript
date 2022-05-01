"use strict";
class Maths {
    static add(num1, num2) {
        return num1 + num2;
    }
    static get currentFiscalYear() {
        return this.fiscalYear;
    }
}
Maths.fiscalYear = 2020;
console.log(Maths.add(2, 3));
console.log(Maths.fiscalYear);
// Example of abstract
class Human {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
}
class Boy extends Human {
    constructor(name) {
        super(name);
    }
    printNameOfHuman() {
        console.log('Name is: ', this.name);
    }
}
const boy = new Boy('Anshuman');
boy.printNameOfHuman();
