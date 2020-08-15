
  // Top JS interview Questions Tech Sith

  // Q1 Diff btw Let and Var
  let x = function(){
    if(true){
      console.log( "1 - " + v)
      console.log("2 - " + l)
      var v = 2 
      let l = 1
    }
    console.log("3 - " + v)
    console.log("4 - " + l)
  }
  // x()
  // 2
  // undefined

// Q2 -  What is Prototypical Inheritance?

// Ans - Every object has a property called prototype, where we can add properties and methods and when we create another 
//       object from this object the newly created object will automatically inherit the property of the parent.
//       But not by including by it's own property but instead it uses from its parent prototype properties and methods.
//       And the way it works is, when you call a particular method on an object, it will first looks at it's own properties
//       to see if it's there and if it's not there it will look to its parent 

// e.g. if you carried a thousand objects, you don't have to include all of these methods. and it's automatically available to you.
//      So what this prototype inheritance means

// Code example

let Car = function(model){
    this.model = model
}

Car.prototype.getModel = function(){
  return this.model
}

let toyota = new Car("Toyota")
// console.log(toyota.getModel())

// Q3 -  console.log([] + []) // output Empty String
//       console.log({} + []) // Output Empty String
//       console.log({} + {}) // output Empty String

// Q4 - print output

  function a(){
    return 'hello'
  }
  
  const sent = a `hi` // it is consider as argument and the function is returning 'hello'
  // console.log(sent) // "hello"

  // Q5 -  Print Output

  function y(){
    console.log(this.length) // this represents arguments arrays
    return this.length
  }

  let x = {
    length : 5,
    method : function(y) {
          arguments[0](); // arguments keyword gives the arguments in an array format
    }
  }
  // x.method(y, 1)

  // Q6 - Print Output
  // console.log(('hi').__proto__.__proto__.__proto__) // Output - null
  // 1st proto - String created from 2nd proto - Object - created from the main object where __proto__ points to null 
  //  concept - prototype chaining

  // Q7  - Remove Duplicates in single line
  let nums =  [1, 2, 2, 3]
  //console.log([...new Set(nums)])

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
// console.log(emp1.company);
// output xyz
var Employee = {
  company: 'xyz'
}
var emp1 = new Object(Employee)
delete emp1.company
// console.log(emp1.company);
//undefined

var Employee = {
  company: 'xyz'
}
var emp1 = Employee
delete emp1.company
// console.log(emp1.company);
// output undefined
