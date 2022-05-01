// Note: Added Inheritance suffix to avoid conflict with names present in private-public-readonly

class DepartmentInheritance {
    // Alternative 1
    // private name: string;
    // private employees: string[] = []
    protected employees: string[] = []

    // // It is called when object is created
    // constructor(n: string) {
    //     this.name = n
    // }

    // Alternative 2
    constructor(private readonly id: string, public name: string) { }

    describe(this: DepartmentInheritance) {
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

class ItDepartment extends DepartmentInheritance {
    constructor(id: string, public admins: string[]) {
        super(id, 'IT')
    }

    addEmployee(employee: string) {
        this.employees.push(employee)
    }
}

const itDepartment = new ItDepartment('dep1', ['Max'])
itDepartment.describe()
itDepartment.addEmployee('Ak')
itDepartment.printEmployeeInfo()



