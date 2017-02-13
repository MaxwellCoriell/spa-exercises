"use strict";

var SandwichMaker = (function(originalSandwich) {

	// Set our bread prices key:value pairs
	var breadPrices = {
		rye: 2.00,
		wheat: 3.00,
		nobread: 0.00
	};

	// Adding the 'addBread' method to the sandwich
	originalSandwich.addBread = function(bread) {
		return breadPrices[bread];
	}

	// Return the new, augmented object with the new method on it
	return originalSandwich;

})(SandwichMaker);