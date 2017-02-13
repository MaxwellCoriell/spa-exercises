"use strict";

// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(originalSandwich) {

  // Private variable to store the different prices
     var meatPrices = {
        turkey: 1.00,
        ham: 1.20,
        nomeat: 0.00,
    };

    // Adding the 'addMeat' method to the sandwich
	originalSandwich.addMeat = function(meat) {
		return meatPrices[meat];
	}

	// Return the new, augmented object with the new method on it
	return originalSandwich;

})(SandwichMaker);