function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas) {
    let pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.salsas = salsas;
    return pizza;
}
    
let p1 = pizzaOven("estilo Chicago", "tradicional", "mozzarella", ["pepperoni", "salchicha"]);
console.log(p1);

let p2 = pizzaOven("lanzada a mano", "marinara", ["mozzarella","feta"], ["champiñones", "aceitunas", "cebollas"]);
console.log(p2);

let p3 = pizzaOven("crocante", "napolitana", "queso azul", ["piña", "morrones"]);
console.log(p3);

let p4= pizzaOven("extra fina", "tradicional", ["cheddar","parmesano"], ["calabresa", "tomate", "pesto"]);
console.log(p4);

