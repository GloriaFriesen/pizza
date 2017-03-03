//Business Logic
function Pizza (price, size, toppings) {
  this.price = price;
  this. size = size;
  this.toppings = toppings;
}




//User Interface Logic
$(document).ready(function() {
  var newPizza = new Pizza();
});
