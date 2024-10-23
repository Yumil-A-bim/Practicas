
console.log(x === undefined); // true
var x = 3;

(function () {
  console.log(x); // undefined
  var x = "local value";
})();

// var x;
// console.log(x === undefined); // true
// x = 3;

// (function () {
//   var x;
//   console.log(x); // undefined
//   x = "local value";
// })();

// console.log(x); // ReferenceError
// const x = 3;

// console.log(y); // ReferenceError
// let y = 3;

//  ^--------------- Const   re-assignments JUST  with OBJETS -------------------

const MY_OBJECT = { key: "value" };
MY_OBJECT.key = "otherValue";

const MY_ARRAY = ["HTML", "CSS"];
MY_ARRAY.push("JAVASCRIPT");
console.log(MY_ARRAY); // ['HTML', 'CSS', 'JAVASCRIPT'];

//  ^--------------- DATA TYPE CONVERISON  -------------------

// x = "The answer is " + 42; // "The answer is 42"
// y = 42 + " is the answer"; // "42 is the answer"
// z = "37" + 7; // "377"

// "37" - 7; // 30
// "37" * 7; // 259

//  ^--------------- OBJETS  -------------------

const sales = "Toyota";

function carTypes(name) {
  return name === "Honda" ? name : `Sorry, we don't sell ${name}.`;
}

const car = { myCar: "Saturn", getCar: carTypes("Honda"), special: sales };

console.log(car.myCar); // Saturn
console.log(car.getCar); // Honda
console.log(car.special); // Toyota

//NEST

// const car = { manyCars: { a: "Saab", b: "Jeep" }, 7: "Mazda" };

// console.log(car.manyCars.b); // Jeep
// console.log(car[7]); // Mazda

// const name = "Lev",
//   time = "today";
// const LiteralString = `Hello ${name}, how are you ${time}?`;

//  ^--------------- CONDITIONALS  -------------------

if (condition) {
  statement1;
} else {
  statement2;
}

while (x < 10) {
  x++;
}

// ^---------------------------Falsy values---------------

/*

    false
    undefined
    null
    0
    NaN
    the empty string ("")

  */

//todo: example


//*Boolean object!
const b = new Boolean(false);

if (b) {
  // this condition evaluates to true
}
if (b == true) {
  // this condition evaluates to false
}

//^SWITCH

switch (expression) {
    case label1:
      statements1;
      break;
    case label2:
      statements2;
      break;
    // …
    default:
      statementsDefault;
  }
  