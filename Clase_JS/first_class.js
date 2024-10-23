console.log('Hello world!');


// VAR
var PrimeraVariable;

//LET
let SegundaVariable;

//CONST
const PrimeraConstante = 1;

console.log(PrimeraVariable, SegundaVariable, PrimeraConstante);

//------------------------------------- test

// PrimeraConstante = 20;

PrimeraVariable = 10;

SegundaVariable = 'HOLA';


console.log(PrimeraVariable, SegundaVariable, PrimeraConstante);


PrimeraVariable = 'HOLA';

SegundaVariable = 10;

console.log(PrimeraVariable, SegundaVariable, PrimeraConstante);


const SEGUNDAConstante = 'array';
console.log(SEGUNDAConstante);

//
const functions = () =>{
    let VarContext = 1000;
    PrimeraVariable = 'HOLA 2';

    SegundaVariable = 2;
    console.log(PrimeraVariable, SegundaVariable, PrimeraConstante, VarContext);

}

functions();

console.log(PrimeraVariable, SegundaVariable, PrimeraConstante);

//^ 1)HOLA 2 2 1 1000
//^ 2)HOLA 10 1
//^ 3)HOLA 2 2 1
//^ 4)ERR
console.log("-------------------------types-----------------------------");
let Undi ;
let bOOL = true;
let arr = [true,'asdf', 1, []];
let N = null


console.log(typeof(PrimeraVariable), typeof(PrimeraConstante), typeof(Undi), typeof(bOOL), typeof(arr), typeof(null) );


//* STRING
//* UNDEFINED
//* NUMBER
//* boolen
//* OBJECT
//* NULL

//* biginit - ^23
//* Symbol


// Function
// function
// ()=>{}
// ...