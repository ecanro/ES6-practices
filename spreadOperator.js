//... es el spread operator
//se usa cuando experamos muchos elementos: functions, arrays, variables

//en arrays
let letters = ['a', 'b', 'c']
console.log(letters)//->['a', 'b', 'c']
console.log(...letters);//->'a''b''c' los elementos fuera del array, spread

//o con numeros para verlo mejor
function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers)); // expected output: 6

//otro ejemplo en vez de usar concat en dos arrays podemos usar ...
let alpha = ['a', 'b', 'c'];
let bet = ['d', 'e', 'f'];

var alphabet = alpha.concat(bet);//no esta mal

//con ...
var alphabet1 = [ ...alpha, ...bet];//quizas mas simple e intuitivo
console.log(alphabet1)

//ahora con funciones
let firts = [1, 2, 3];
let seconds = [2, 4, 6];
let result = (a, b, c) => {
    let product = a * b * c;
    console.log(product);
};
result(...firts);//->6
result(...seconds);//->48

//usando funciones, template literals y ...
let arr = ['ran', 'bathtoom', 'quickly'];
let madLib  = (verb, noun, adjective) => {
    console.log(`I ${verb} to he ${noun} and ${adjective} sat down.`);
};
madLib(...arr);