"use strict";

var SandwichMaker = (function(originalSandwich) {

	// Set our bread prices key:value pairs
    var veggiePrices = {
       lettuce: 0.55,
       tomato: 0.35,
       noveggie: 0.00,
   };

	// Adding the 'addBread' method to the sandwich
	originalSandwich.addVeggie = function(veggie) {
		return veggiePrices[veggie];
	}

	// Return the new, augmented object with the new method on it
	return originalSandwich;

})(SandwichMaker);