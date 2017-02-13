"use strict";

var SandwichMaker = (function(originalSandwich) {

	// Set our bread prices key:value pairs
    var cheesePrices = {
       swiss: 0.50,
       pepperjack: 0.70,
       nocheese: 0.00,
   };


	// Adding the 'addCheese' method to the sandwich
	originalSandwich.addCheese = function(cheese) {
		return cheesePrices[cheese];
	}

	// Return the new, augmented object with the new method on it
	return originalSandwich;

})(SandwichMaker);