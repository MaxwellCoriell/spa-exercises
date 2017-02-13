"use strict";

var SandwichMaker = (function() {

  // Private variable to store the price
  var totalPrice = 0;

  // Return the public interface that other code can interact with
  return {
    addTopping: function(toppingPrice) {
      totalPrice += toppingPrice;
      console.log("The total price is now: " + totalPrice);
      document.getElementById("finalSandwich").innerHTML = `<h2>The total price is now: $` + totalPrice; '</h2>';
    }
  };
})();