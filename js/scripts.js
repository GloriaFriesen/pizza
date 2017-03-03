//Business Logic
function Pizza(price, size, toppings) {
  this.price = 15;
  this.size = pizzaSize;
  this.toppings = pizzaToppings;
}

Pizza.prototype.changePrice = function() {
  if (this.size === "small") {
    this.price -= 3
  } else if (this.size === "large") {
  	this.price += 3
  }
}

var pizzaSize = "small";
var pizzaToppings = ["pepperoni"];
var newPizza = new Pizza(pizzaSize, pizzaToppings);
newPizza.changePrice();
console.log(newPizza);

//User Interface Logic
// $(document).ready(function() {
//   var pizzaSize = $("input#pizzaSize").val();
//   var pizzaToppings = $("input#pizzaSize").val();
//   var newPizza = new Pizza();
// });
