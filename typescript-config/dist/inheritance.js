"use strict";
// Note: Added Inheritance suffix to avoid conflict with names present in private-public-readonly
class DepartmentInheritance {
    // // It is called when object is created
    // constructor(n: string) {
    //     this.name = n
    // }
    // Alternative 2
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // Alternative 1
        // private name: string;
        // private employees: string[] = []
        this.employees = [];
    }
    describe() {
        console.log('Department info: ', this.id, this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ItDepartment extends DepartmentInheritance {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
}
const itDepartment = new ItDepartment('dep1', ['Max']);
itDepartment.describe();
itDepartment.addEmployee('Ak');
itDepartment.printEmployeeInfo();
