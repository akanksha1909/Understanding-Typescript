class DepartmentGetterSetter {
    private employees: string[] = []
    constructor(private readonly id: string, public name: string) { }

    get employessInfo() {
        return this.employees
    }

    set addEmployees(employees: string[]) {
        employees.forEach(e => {
            this.addEmployee(e)
        })
    }

    describe(this: DepartmentGetterSetter) {
        console.log('Department info: ', this.id, this.name)
    }

    addEmployee(employee: string) {
        this.employees.push(employee)
    }
}

const accountingGetterSetter = new DepartmentGetterSetter('dep1', 'Accounting')
accountingGetterSetter.addEmployee('Ak')

// With "getter", we can access it like a property
console.log(accountingGetterSetter.employessInfo)

// Usage of "setter"
accountingGetterSetter.addEmployees = ['Ans', 'Aks']
console.log(accountingGetterSetter.employessInfo)
