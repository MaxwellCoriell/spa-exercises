"use strict";

// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(originalSandwich) {

  // Private variable to store the different prices
     var meatPrices = {
        "nomeat": 0.00,
        "turkey": 1.00,
        "ham": 1.20,
        "chickenBreast": 2.00,
        "salami": 2.00
    };

    // Adding the 'addMeat' method to the sandwich
	maker.addMeat = function(meat) {
		return meatPrices[meat];
	}

	// Return the new, augmented object with the new method on it
	return maker;

})(SandwichMaker);