// Factory Pattern

class IceCreamFactory {
    constructor() {
      this.createIcecream = function(flavor) {
        let iceCream;
        if (flavor === 'chocolate'){
            iceCream = new Chocolate();
        }  
        else if (flavor === 'mint'){
            iceCream = new Mint();
        } 
        else if (flavor === 'strawberry'){
            iceCream = new Strawberry();
        }
        return iceCream;
      };
    }
  }
  
  class Chocolate {
    constructor() {
      this.icecreamFlavor = "chocolate";
      this.message = function() {
        return `You chose the ${this.icecreamFlavor} flavor.`;
      };
    }
  }
  
  class Mint {
    constructor() {
      this.icecreamFlavor = "mint";
      this.message = function() {
        return `You chose the ${this.icecreamFlavor} flavor.`;
      };
    }
  }
  
  class Strawberry{
    constructor() {
      this.icecreamFlavor = "strawberry";
      this.message = function() {
        return `You chose the ${this.icecreamFlavor} flavor.`;
      };
    }
  }
  
  // creating objects
  const iceCreamfactory = new IceCreamFactory();
  
  const chocolate = iceCreamfactory.createIcecream('chocolate');
  const mint = iceCreamfactory.createIcecream('mint');
  const strawberry = iceCreamfactory.createIcecream('strawberry');
  
  console.log(chocolate.message()); 
  console.log(mint.message()); 
  console.log(strawberry.message()); 


// Using ES6 Constructor Pattern

// class PeopleFactory{
//     constructor(name, age, state){
//         this.name = name
//         this.age =  age
//         this.state =  state
//         this.printPerson = function(){
//             console.log(this.name + " " + this.age + " " + this.state)
//         }
//     }    
// }
// let person3 = new PeopleFactory("Dj", 28, "Jaipur")
// let person4 = new PeopleFactory("Maachi", 28, "Jodhpur")
// person3.printPerson()
// person4.printPerson()

// console.log(person3)
// console.log(person4)

// PROTOTYPE PATTERN
