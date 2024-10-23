
const myDate = new Date(1995, 11, 17);


console.log(myDate.getTime()); // 819129600000

myDate.getTime = function () {
  console.log("something else!");
};

myDate.getTime(); // 'something else!'




//Otras formas de crear Objetos

//Function



//Class
class MyClass {
    // class body...
  }


  class MyClass {
    // Constructor
    constructor() {
      // Constructor body
    }
    // Instance field
    myField = "foo";
    // Instance method
    myMethod() {
      // myMethod body
    }
    // Static field
    static myStaticField = "bar";
    #password = "bar";
    // Static method{}
    static confirmPassword(pw) {
      // myStaticMethod body

    }
    // Static block
    static {
      // Static initialization code
    }
    // Fields, methods, static fields, and static methods all have
    // "private" forms
  }
  

  const MyClass = class MyClassLongerName {
    // Class body. Here MyClass and MyClassLongerName point to the same class.
  };
  new MyClassLongerName(); // ReferenceError: MyClassLongerName is not defined
  


  //CONSTRUCTOR

  class Color {
    constructor(r, g, b) {
      // Assign the RGB values as a property of `this`.
      this.values = [r, g, b];
    }
  }
  

//   const red = new Color(255, 0, 0);
// console.log(red);



//Nuevas instancias cada que uso New

// const red = new Color(255, 0, 0);
// const anotherRed = new Color(255, 0, 0);
// console.log(red === anotherRed); // false




//Declaracion Privada

class Color {
    // Declare: every Color instance has a private field called #values.
    #values;
    constructor(r, g, b) {
      this.#values = [r, g, b];
    }
    //Opcion
    // constructor(r, g, b, a = 1) {
    //     this.#values = [r, g, b, a];
    //   }


    getRed() {
      return this.#values[0];
    }
    setRed(value) {
      this.#values[0] = value;
    }
  }
  
  const red = new Color(255, 0, 0);
  console.log(red.getRed()); // 255
  

  console.log(red.#values); // SyntaxError: Private field '#values' must be declared in an enclosing class
