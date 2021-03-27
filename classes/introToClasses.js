/*
- JavaScript classes were introduced in ES5 and is a new way to write JS's previous prototype-based inheritence, which is a way of creating an object that works as a blueprint.

-Classes act as a blueprint for creating objects that share methods and properties. 

- Classes consist of the class name, curly braces, and any properties we include withing the {}

- Classes can be written as class expressions or class declarations

-Class declarations do not get hoisted

capt first letter
class Automobile {
    //methods and properties go here
}

let vehicle = class {
    //methods and properties
}



- The constructor method is a special method that helps and initialize an object created from a class. It works in tandem with the new keyword. 

- The constructor needs to be included for us to create new objects or instances of our class. This allows us to set up properties and pass in values for those properties when creating the new instance. 

- Each class can only hav ONE constructor

*/

// (1)
class Cookie {
  //(2)
  constructor(type, icing, shape) {
    //(3)     (4)
    this.t = type;
    this.i = icing;
    this.s = shape;
  }
}
// console.log(typeof Cookie);  function

// 1. Class named Cookie
// 2. The constructor method takes in 3 params of type, icing, shape.  since the constructor method is invoked when we call the class, we need to supply the arguments.
// 3. assigning keys/properties for each new instance of our Cookie class
// 4. assigning those keys/properties the values that are passed in as arguments.

let chocolateChip = new Cookie("chocolate chip", false, "circle");
console.log(chocolateChip);

/*
Bronze:
Build an Automobile class that takes in a make and a model in the constructor. Bind those two parameters to the class's properties with matching names. 

Silver:
Add two methods to the Automobile class: start() and stop(). Each method should print out a message to the console that the engine has started or stopped. Include the vehicle's make and model in the output.

Gold:
Use the new keyword to create a new instance of the Automobile class and assign the new instance to a variable. Run both methods.
*/

class Automobile {
  constructor(make, model) {
    this.ma = make;
    this.mo = model;
  }
  start() {
    console.log(`The ${this.ma} ${this.mo} has started`);
  }

  stop() {
    console.log(`The ${this.ma} ${this.mo} has stopped`);
  }
}

let myCar = new Automobile("Jeep", "Renegade");

console.log(myCar);
myCar.start();
myCar.stop();

/*
-The extends keyword is used in class declarations/expressions to create a new class as a child of another class. 

- Each new class we create that extends from the parent class not only inherits the properties and methods from the parent class, but it also can have its own methods and properties
*/

//parent
class Animal {
    constructor (name){
        this.name = name;
    }
    eat(){
        console.log(`${this.name} eats their food`);
    }

}

//Subclass
//The super method gives us access to the parent classes properties anf methods

class Dog extends Animal {
    constructor(name, breed){
        super(name);
        this.breed = breed;
    }
    play(){
        console.log(`${this.name} fetches the ball`);
    }
}

let Georgie = new Dog ("Georgie", "Bearded Collie");
Georgie.eat();
Georgie.play();
