"use strict";

var SandwichMaker = (function(originalSandwich) {

	// Set our bread prices key:value pairs
    var condimentPrices = {
        ketchup: 0.25,
        mustard: 0.25,
        nocondiments: 0.00,
       };
	// Adding the 'addCondiment' method to the sandwich
	originalSandwich.addCondiment = function(condiment) {
		return condimentPrices[condiment];
	}

	// Return the new, augmented object with the new method on it
	return originalSandwich;

})(SandwichMaker);