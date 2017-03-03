//Business Logic
function Pizza (price, size, toppings) {
  this.price = 15;
  this.size = pizzaSize;
  this.toppings = pizzaToppings;
}

// Pizza.prototype.addToppings = function() {
//   pizzaToppings.push("mushrooms");
// }



//User Interface Logic
$(document).ready(function() {
  var pizzaSize = $("input#pizzaSize").val();
  var pizzaToppings = $("input#pizzaSize").val();
  var newPizza = new Pizza();
});
