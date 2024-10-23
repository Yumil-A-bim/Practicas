//Object-Oriented Porgramming
//Entity with properties and type

let dog = {
  breed: "Labrador",
  color: "black",
  bark() {
    console.log("Woof!");
  },
};
dog.bark(); // Woof!

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}
let animal = new Animal("Dog");
animal.speak(); // Dog makes a noise.

//    2---------Encapsulacion
// Encapsulation means that the internal representation of an object is hidden from the outside.

class Car {
  constructor(brand) {
    this._brand = brand;
  }
  get brand() {
    return this._brand;
  }
  set brand(newBrand) {
    this._brand = newBrand;
  }
}
let myCar = new Car("Ford");
console.log(myCar.brand); // Ford
myCar.brand = "BMW";
console.log(myCar.brand); // BMW

// 3. Inheritance
// Inheritance allows a class to inherit properties and methods from another class.{}

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}
class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}
let d = new Dog("Mitzie");
d.speak(); // Mitzie barks.

// 4. Polymorphism
// Polymorphism allows objects of different classes to be treated as objects of a common superclass.

class Animal {
  speak() {
    console.log("Animal speaks");
  }
}
class Cat extends Animal {
  speak() {
    console.log("Meow");
  }
}
class Dog extends Animal {
  speak() {
    console.log("Woof");
  }
}
function makeAnimalSpeak(animal) {
  animal.speak();
}
makeAnimalSpeak(new Cat()); // Meow
makeAnimalSpeak(new Dog()); // Woof

// 5. Abstraction
// Abstraction involves creating simple models representing complex real-world objects.

class Vehicle {
  startEngine() {
    console.log("Engine started");
  }
  stopEngine() {
    console.log("Engine stopped");
  }
}
class Car extends Vehicle {
  startEngine() {
    console.log("Car engine started");
  }
}
let myCar = new Car();
myCar.startEngine(); // Car engine started






