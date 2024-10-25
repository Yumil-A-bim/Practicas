// ?CALLBACKS 

/*
Como hemos dicho, las funciones callback no son más que un tipo de funciones que se 
pasan por parámetro a otras funciones. Además, los parámetros de esos callbacks toman
 un valor especial en el interior de la función.
*/




//^--------------------------------------------------------
//^Example:
//Funcion simple
const letters = ["A", "B", "C"];

// for (let pos = 0; pos < letters.length; pos++) {
//   const letter = letters[pos];
//   console.log(`pos=${pos} letter=${letter}`);
// }





//Ahora con callback

// const letters = ["A", "B", "C"];
//^--------------------------

// ()=>{}
// function action(element, index) {
//   console.log(`pos=${index} letter=${element}`);
// }

// Por cada item del array, ejecuta action()
// letters.forEach(action);

//Estamos acostumbrados a verlo realmente de la siguiente manera:



  //^--------------------------------------------------------


  //setTimeout(callback, time).

  function action() {
    console.log("He ejecutado la función");
  }
  
  setTimeout(action, 2000);
  

  letters.forEach((element, index) => {
    console.log(`pos=${index} letter=${element}`);
  });
  

//   //O puedes hacerlo de la sigueinte manera:
  setTimeout(() => console.log("He ejecutado la función"), 2000);


