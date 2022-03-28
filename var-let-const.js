//diferencias entre var let y const
//var tiene un scope global, function scope, let un scope de bloque
//const define una constante, es decir su tipo  y valor nunca cambia si es primitivo
//si es array no cambia que sea array pero pueden mudar los elementos

//var
function varTest() {
    var x  = 1
    if (true) {
        var x = 2;
        console.log(x);//->2
    }console.log(x)//->2
}
//para que se entienda, definimos una variable x = 1 global, dentro de la funcion
//luego en el condicional la cambiamos, cuando la vemos en la consola siempre va a 
//ver el ultimo valor de x en este caso 2

//let
function varTest() {
    let x  = 1 //let global de la funcion
    if (true) {
        let x = 2;//let local del if
        console.log(x);//->2
    }console.log(x);//->1
};
//porque este resultado, porque son dos let con diferentes scope

//const
const string = 'string';
string;//->'string'

const arr = [];
arr.push('texto')//const = ['texto'], deja usar el metodo del objeto ya que sigue siendo un array;
arr = ['texto']//-> da error