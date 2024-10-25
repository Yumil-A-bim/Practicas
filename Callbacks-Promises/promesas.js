/*
?PROMESAS
*Las promesas son un concepto para simplificar el manejo de la asincronía en Javascript de una forma mucho más 
*elegante y práctica que, por ejemplo, la que se utilizaba antiguamente haciendo uso de las funciones callbacks, 
*ya que era fácil que se volviese un código complejo y difícil de leer.

*/

/*
Como su propio nombre indica, en la programación al igual que en la vida real, una promesa es algo que en principio
 pensamos que se cumplirá en el futuro, pero a medida que pasa el tiempo pueden ocurrir varias cosas:


 Las promesas en JS tienen 3 estados

 Promesa -----> Promesa pendiente
                    ....-------------->Promesa cumplida
                    ....-------------->Promesa Rechazada


*/


//^Trabajar con Promesas
//Thennables

// .then
// .catch

// Both: .then( Function, function reject)

//.finally()

// fetch("/robots.txt"); 

// fetch("/robots.txt").then(function() {
//     /* Código a realizar cuando se cumpla la promesa */
//   });


//   fetch("/robots.txt")
//   .then(response => {
//     console.log("Código asíncrono");
//   });

// console.log("Código síncrono");