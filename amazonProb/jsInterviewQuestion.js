var Employee = function (name, company, salary) {
    this.name = name || "";       //Public attribute default value is null
    this.company = company || ""; //Public attribute default value is null
    this.salary = salary || 5000; //Public attribute default value is null

    // Private method
    var increaseSalary = function () {
        this.salary = this.salary + 1000;
    };

    // Public method
    this.dispalyIncreasedSalary = function() {
        increaseSlary();
        console.log(this.salary);
    };
};

// Create Employee class object
var emp1 = new Employee("John","Pluto",3000);
// Create Employee class object
var emp2 = new Employee("Merry","Pluto",2000);
// Create Employee class object
var emp3 = new Employee("Ren","Pluto",2500);


var Employee = {
    company: 'xyz'
  }
  var emp1 = Object.create(Employee);
  delete emp1.company
  console.log(emp1.company);
// output xyz
  var Employee = {
    company: 'xyz'
  }
  var emp1 = new Object(Employee)
  delete emp1.company
  console.log(emp1.company);
  undefined

  var Employee = {
    company: 'xyz'
  }
  var emp1 = Employee
  delete emp1.company
  console.log(emp1.company);
  // output undefined

  // Top JS interview Questions Tech Sith

  