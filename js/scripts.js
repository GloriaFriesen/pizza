//Business End Logic
function Pizza (price, size, meatToppings, veggieToppings) {
  this.price = price;
  this.size = size;
  this.meatToppings = meatToppings;
  this.veggieToppings = veggieToppings
}

Pizza.prototype.changePriceSize = function() {
  if (this.size === "Small") {
    this.price -= 2
  } else if (this.size === "Large") {
  	this.price += 2
  } else if (this.size === "Extra-Large") {
  	this.price += 4
  }
}

Pizza.prototype.changePriceMeat = function() {
  this.price += (this.meatToppings.length * 1.25);
}

Pizza.prototype.changePriceVeggie = function() {
  this.price += (this.veggieToppings.length * .75);
}

//User Interface Logic
$(document).ready(function() {
  $("form#pizzaMaker").submit(function() {
    event.preventDefault();
    var price = 15;
    var size = $("input:radio[name=optionsRadios]:checked").val();
    var meatToppings = [];
      $("input:checkbox[name=meatToppings]:checked").each(function(){
        var meatTopping = $(this).val();
        meatToppings.push(meatTopping);
      });
    var veggieToppings = [];
      $("input:checkbox[name=veggieToppings]:checked").each(function(){
        var veggieTopping = $(this).val();
        veggieToppings.push(veggieTopping);
      });
    var newPizza = new Pizza(price, size, meatToppings, veggieToppings);

    newPizza.changePriceSize();
    newPizza.changePriceMeat();
    newPizza.changePriceVeggie();

    $("#pizzaResult").show();
    $("span.size").append("<h4>" + newPizza.size + "</h4>");
    $("span.meatTopping").append("<h4>" + newPizza.meatToppings + "</h4>");
    $("span.veggieTopping").append("<h4>" + newPizza.veggieToppings + "</h4>");
    $("span.price").append("<h4> $" + newPizza.price.toFixed(2) + "</h4>");
  });
});
