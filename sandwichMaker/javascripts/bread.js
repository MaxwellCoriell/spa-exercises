"use strict";
console.log("WE HAVE BREAD!")

var SandwichMaker = (function(sandwichMaker) {

	// Private variable to set our bread prices key:value pairs
	var breadPrices = {
		"noBread": 0.00,
		"white": 1.00,
		"wheat": 1.00,
		"sourdough": 2.00,
		"pumpernickel": 2.00
	};

	// Adding the 'addBread' method to the sandwich
	maker.addBread = function(bread) {
		console.log(breadPrices[bread]);
		return breadPrices[bread];
	}

	// Return the new, augmented object with the new method on it
	return maker;

})(SandwichMaker);