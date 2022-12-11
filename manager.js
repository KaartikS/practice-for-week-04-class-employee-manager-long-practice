const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, salary, title, manager, employees){
        super(name, salary, title, manager);
        if(employees instanceof Array){
            this.employees = employees;
        }
        else{
            this.employees = [];
        }
    }

    addEmployee(employee){
        if(employee instanceof Employee){
            this.employees.push(employee);
        }
    }

    _totalSubSalary(){
        let totalSalary = 0;
        this.employees.forEach(employee => {
            if(employee instanceof Manager){
                totalSalary += employee.salary + employee._totalSubSalary();
            }
            else{
                totalSalary += employee.salary;
            }
        })
        return totalSalary;
    }

    calculateBonus(multiplier){
        let totalEmployeeSalary = this._totalSubSalary();
        let totalCombinedSalary = this.salary + totalEmployeeSalary;
        console.log(totalCombinedSalary);
        let bonus = (totalCombinedSalary) * multiplier;
        return bonus;
    }
}

try {
    module.exports = Manager;
  } catch {
    module.exports = null;
  }
