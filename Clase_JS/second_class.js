// // * --------------- Comments -------------------                    

// // a one line comment

// /* this is a longer,
//  * multi-line comment
//  ^ ESTILO
//  !errors
//  ? hi
//  todo: task somethin
// Extention: Colorful comments
// */

// /* You can't, however, /* nest comments */ SyntaxError */


// // * --------------- Declarations -------------------                    


// var VaraibleVar;
// let VariableLet;
// const Constant = 0; //DEBES INICIALIZARLA


// // * --------------- Varaible Scope -------------------                    


// /*

// Global scope: The default scope for all code running in script mode.
// Module scope: The scope for code running in module mode.
// Function scope: The scope created with a function.
//  let & const :
//  Block Scope
// */


// var x = 1;
// let y = 1;

// if (true) {
//   var x = 2;
//   let y = 2;
// }

// console.log(x);
// // Expected output: 2

// console.log(y);
// // Expected output: 1


// if (Math.random() > 0.5) {
//     const y = 5;
//   }
//   console.log(y); // ReferenceError: y is not defined
  

// var x = 1;
// {
//   var x = 2;
// }
// console.log(x); // 2



// let x = 1;
// {
//   let x = 2;
// }
// console.log(x); // 1

function square(number) {
  if(typeof(number)=="number"){
    return number * number;
  }
  return `${number} no es un numero`

}

const a = "a12321asdfasdf"
//pasar solo varibales
//paseInt 

console.log(square(a))


const square_2 = (number) => {
  if(typeof(number)=="number"){
    return number * number;
  }
  return `${number} no es un numero`

}

console.log(square_2(11))

const arr = ["a","r","a",1 , nulll]

// ordenar(arr, "asc/desc")
// a ,a, r
