//forEach() ejecuta la función indicada una vez por cada elemento del array.
//sintaxis:
//array.forEach(function(current, index optional, array optional), this value optional)

//forEach simplifica un poco mas el uso del ciclo for

let scaryCreatures = ['lions', 'tigers', 'bears'];

scaryCreatures.forEach( 
    scaryCreature => 
    console.log(`Dorthy is afraid of ${scaryCreature}`)
    );

//con objetos, queremos que muestre el index y el valor
var colorArray = [ 
    {color: 'red'}, 
    {color: 'orange'}, 
    {color: 'yellow'} 
];

colorArray.forEach((color, index) => {
    console.log(`i value: ${index} | Color Name : ${color.color}`);
});

//otro
var employees = [
    { name : 'Edgar', title : 'Ceo', salary : 90000 },
    { name : 'Sara', title : 'administrator', salary : 75000 },
    { name : 'Saed', title : 'manager', salary : 50000 }
];

//devolver usando forEach nombre y salario
employees.forEach((employeed, index) => {
        console.log(`${index + 1}: ${employeed.name} is a ${employeed.title} who makes ${employeed.salary} every year.`);
    })
