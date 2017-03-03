//Business End Logic
function Pizza (price, size, pizzaToppings) {
  this.price = price;
  this.size = size;
  this.pizzaToppings = pizzaToppings;
}

Pizza.prototype.changePriceSize = function() {
  if (this.size === "Small") {
    this.price -= 2
  } else if (this.size === "Large") {
  	this.price += 2
  } else if (this.size === "Extra-Large") {
  	this.price += 3
  }
}

Pizza.prototype.changePriceToppings = function() {
  this.price += (this.pizzaToppings.length * .75);
}

//User Interface Logic
$(document).ready(function() {
  $("form#pizzaMaker").submit(function() {
    event.preventDefault();
    var price = 15;
    var size = $("input:radio[name=optionsRadios]:checked").val();
    var pizzaToppings = [];
      $("input:checkbox[name=pizzaToppings]:checked").each(function(){
        var topping = $(this).val();
        pizzaToppings.push(topping);
      });
    var newPizza = new Pizza(price, size, pizzaToppings);
    newPizza.changePriceSize();
    newPizza.changePriceToppings();


    $("#pizzaResult").fadeIn();
    $("span.size").html("<h4>" + newPizza.size + "</h4>");
    $("span.topping").html("<h4>" + newPizza.pizzaToppings + "</h4>");
    $("span.price").html("<h4> $" + newPizza.price.toFixed(2) + "</h4>");
  });
});
