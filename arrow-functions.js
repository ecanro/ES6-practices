//arrow functions
//para funciones anonimas con o sin parametros

let cubed;
//con un parametro
cubed = x => x*x*x;

cubed = x => { return x*x*x };
cubed = (x) => { return x*x*x }

//con mas de un parametro
let add;
add = (x, y) => x + y;
add = (x, y) => { return x + y};

//con arrays y metodos
letnumbers = [ 2, 4, 6, 8 ]
let squared = numbers.map( n => n * n );