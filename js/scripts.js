//Business End Logic
function Pizza (price, size, pizzaToppings) {
  this.price = price;
  this.size = size;
  this.pizzaToppings = pizzaToppings;
}

Pizza.prototype.changePriceSize = function() {
  if (this.size === "small") {
    this.price -= 2
  } else if (this.size === "large") {
  	this.price += 2
  } else if (this.size === "extra-large") {
  	this.price += 3
  }
}

Pizza.prototype.changePriceToppings = function() {
  this.price += (this.pizzaToppings.length * .75)
}


//User Interface Logic
$(document).ready(function() {
  $("form#pizzaMaker").submit(function() {
    event.preventDefault();
    var price = 15;
    var size = $("select#sizeSelector").val();
    var pizzaToppings = [];
      $("input:checkbox[name=pizzaToppings]:checked").each(function(){
        var topping = $(this).val();
        pizzaToppings.push(topping);
      });
    var newPizza = new Pizza(price, size, pizzaToppings);
    newPizza.changePriceSize();
    newPizza.changePriceToppings();
    console.log(newPizza);
});
});
