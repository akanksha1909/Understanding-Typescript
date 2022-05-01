"use strict";
class DepartmentGetterSetter {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    get employessInfo() {
        return this.employees;
    }
    set addEmployees(employees) {
        employees.forEach(e => {
            this.addEmployee(e);
        });
    }
    describe() {
        console.log('Department info: ', this.id, this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
}
const accountingGetterSetter = new DepartmentGetterSetter('dep1', 'Accounting');
accountingGetterSetter.addEmployee('Ak');
// With "getter", we can access it like a property
console.log(accountingGetterSetter.employessInfo);
// Usage of "setter"
accountingGetterSetter.addEmployees = ['Ans', 'Aks'];
console.log(accountingGetterSetter.employessInfo);
