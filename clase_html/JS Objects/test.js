
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
makeAnimalSpeak(new Animal()); // Woof
