//Polymorphism

class Animals{
    constructor(name){
        this.name = name
    }
    eats(){
        console.log(this.name + "eats food")
    }
}

class Alligators extends Animals{
    // Method over riding 
    eats(){
        console.log(this.name + " eats fishes")
    }
}

let murphy = new Alligators("Murphy")
murphy.eats()

// Abstraction 
// Hide details
// Show Essentials
// Example -: Microwave


