//Business Logic
function Pizza(price, size, toppings) {
  this.price = 15;
  this.size = pizzaSize;
  this.toppings = pizzaToppings;
}

Pizza.prototype.changePriceSize = function() {
  if (this.size === "small") {
    this.price -= 3
  } else if (this.size === "large") {
  	this.price += 3
  }
}

Pizza.prototype.changePriceToppings = function() {
	this.price += (this.toppings.length * .5)
}

var pizzaSize = "small";
var pizzaToppings = ["pepperoni"];
var newPizza = new Pizza(pizzaSize, pizzaToppings);
newPizza.changePriceSize();
newPizza.changePriceToppings();
console.log(newPizza);

//User Interface Logic
// $(document).ready(function() {
//   var pizzaSize = $("input#pizzaSize").val();
//   var pizzaToppings = $("input#pizzaSize").val();
//   var newPizza = new Pizza();
// });
