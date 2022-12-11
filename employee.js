class Employee {
    constructor(name, salary, title, manager){
        this.name = name;
        this.salary = salary;
        this.title = title;
        if(manager === undefined){
            this.manager = null;
        }
        else{
            this.manager = manager;
            manager.addEmployee(this);
s}
    }

    calculateBonus(multiplier){
        let bonus = this.salary * multiplier;
        return bonus;
    }
}

try {
    module.exports = Employee;
  } catch {
    module.exports = null;
  }
