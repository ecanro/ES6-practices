//templates literals 
//nueva forma de unir texto com variables en la consola
//no es necesario ' + o de usar los \n para saltos de linea
//elimina la necesidad de las ' y de los +
//ahora usamos `` comillas invertidas...

//ES6
let sentence = 'My name is Edgar\n and I like to run';
sentence;/*->'My name is Edgar
            and I like to run'*/

//uniendo string
var topping1 = 'pepperoni';
var topping2 = 'mushrooms';
var pizzaToppings = 'My favorite pizza has ' + topping1 + 'and ' + topping2 + '!';

var pizza = {
    topping1: 'pepperoni',
    topping2: 'mushrooms',
    favoritePizza: function () {
        return 'My favorite pizza has ' + this.topping1 + ' and ' + this.topping2 + '!';
    }
}
pizza.favoritePizza();



//ES6
let sentence1 = `My name is Edgar 
                and I like to run`;
sentence1; /*'My name is Edgar 
            and I like to run' */

let topping1 = 'pepperoni';
let topping2 = 'mushrooms';
let pizzaToppings = `My favorite pizza has ${topping1} and ${topping2}! `

let pizza = {
    topping1: 'pepperoni',
    topping2: 'mushrooms',
    favoritePizza: function () {
        return `My favorite pizza has ${this.topping1} and ${this.topping2}! `
    }
}
pizza.favoritePizza()