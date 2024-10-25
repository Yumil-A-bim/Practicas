//* 1.- Normal
// const task1 = () => console.log("Tarea 1 completada");
// const task2 = () => console.log("Tarea 2 completada");
// const task3 = () => console.log("Tarea 3 completada");

// task1();
// task3();
// task2();

//* 2.- asincronico

// const task1 = () => setTimeout(() => console.log("Tarea 1 completada en 3 segundos"), 3000);
// const task2 = () => setTimeout(() => console.log("Tarea 2 completada en 2 segundos"), 2000);
// const task3 = () => setTimeout(() => console.log("Tarea 3 completada en 5 segundos"), 5000);

// task1();
// task2();
// task3();

//* 3.-

// const task1 = (callback) => {
//   console.log("Iniciando tarea 1...");
//   setTimeout(() => {
//     callback();
//   }, 3000);
// };

// task1(() => console.log("Tarea 1 terminada en 3 segundos"));

//* 4.- 

// const task1 = (callback) => {
//     console.log("Iniciando tarea 1...");
//     setTimeout(() => {
//       callback();
//     }, 3000);
//   }
  
//   const task2 = (callback) => {
//     console.log("Iniciando tarea 2...");
//     setTimeout(() => {
//       callback();
//     }, 2000);
//   }
  
//   const task3 = (callback) => {
//     console.log("Iniciando tarea 3...");
//     setTimeout(() => {
//       callback();
//     }, 5000);
//   }
  
//   task1( () => {
//     console.log("Tarea 1 completada.");
//     task2( () => {
//       console.log("Tarea 2 completada.");
//       task3( () => {
//         console.log("Tarea 3 completada.");
//       });
//     });
//   });
  

//* 5.- SIMPLIFICADO como en ecuaciones

// const task = (name, time, callback) => {
//     console.log(`Iniciando ${name}...`);
//     setTimeout(() => {
//       callback();
//     }, time);
//   }
  
//   task( "tarea 1", 3000, () => {
//     console.log("Tarea 1 completada.");
//     task( "tarea 2", 2000, () => {
//       console.log("Tarea 2 completada.");
//       task( "tarea 3", 5000, () => {
//         console.log("Tarea 3 completada.");
//       });
//     });
//   });


// *CALBACK HELL
  
