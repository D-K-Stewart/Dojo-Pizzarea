function pizzaOven(bread, protein, cheese, toppings) {
    var pizza = {};
    pizza.bread = bread;
    pizza.protein = protein;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}
    
var p1 = pizzaOven("deep dish", "traditional"["mozzarella"], ["peperoni", "sausage"]);
console.log(p1);

var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "onions", "olives"]);
console.log(p2);

var p3 = pizzaOven("thin crust", "marinara", ["mushrooms", "onions", "green peppers"]);
console.log(p3);

var p4 = pizzaOven("thin crust", "marinara", ["mushrooms", "olives"]);
console.log(p4);