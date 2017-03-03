//Business End Logic
function Pizza(price, pizzaSize, pizzaToppings) {
  this.price = 15;
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
}

Pizza.prototype.changePrice = function() {
  if (this.size === "small") {
    this.price -= 3
  } else if (this.size === "large") {
  	this.price += 3
  }
}

// Pizza.prototype.changePriceToppings = function() {
// 	this.price += (this.toppings.length * .5)
// }

//Front End Logic
$(document).ready(function() {
  $("form#pizzaMaker").submit(function() {
    event.preventDefault();

    var pizzaSize = $("select#sizeSelector").val();

    var newPizza = new Pizza(pizzaSize);
    // newPizza.changePrice();
    // newPizza.changePriceToppings();
    console.log(newPizza);
  });

});
