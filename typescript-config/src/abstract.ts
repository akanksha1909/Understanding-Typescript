class Maths {
    static fiscalYear = 2020;
    static add(num1: number, num2: number) {
        return num1 + num2
    }

    static get currentFiscalYear() {
        return this.fiscalYear
    }
}

console.log(Maths.add(2, 3))
console.log(Maths.fiscalYear)

// Example of abstract
abstract class Human {
    constructor(public name: string) {
        this.name = name
    }
    abstract printNameOfHuman(): void
}

class Boy extends Human {
    constructor(name: string) {
        super(name)
    }
    printNameOfHuman() {
        console.log('Name is: ', this.name)
    }
}

const boy = new Boy('Anshuman')
boy.printNameOfHuman()
