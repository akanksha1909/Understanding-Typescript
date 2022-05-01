// Note:
// private, public and readonly only exists in Typescript and not in Javascript

class Department {
    // Alternative 1
    // private name: string;
    private employees: string[] = []

    // // It is called when object is created
    // constructor(n: string) {
    //     this.name = n
    // }

    // Alternative 2
    constructor(private readonly id: string, public name: string) { }

    describe(this: Department) {
        console.log('Department info: ', this.id, this.name)
    }

    addEmployee(employee: string) {
        this.employees.push(employee)
    }

    printEmployeeInfo() {
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

const accounting = new Department('dep1', 'Accounting')
console.log(accounting)
accounting.describe()

// const copyAccounting = { name: 'Cooking', describe: accounting.describe }
// copyAccounting.describe()

accounting.addEmployee('Max')
accounting.addEmployee('Manu')

accounting.printEmployeeInfo()

// After adding private keyword to employees.
// You will not be able to do it like below
// accounting.employees[2] = 'Anna'



