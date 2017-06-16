"use strict";

var SandwichMaker = (function(originalSandwich) {

	// Set our bread prices key:value pairs
    var veggiePrices = {
	    "noVegetable": 0.00,
	  	"tomato": 0.25,
	  	"lettuce": 0.25,
	  	"onion": 0.25,
	    "greenPepper": 0.25
   };

	// Adding the 'addBread' method to the sandwich
	maker.addVeggie = function(veggie) {
		console.log(vegetablePrices[veggie]);
		return veggiePrices[veggie];
	};

	// Return the new, augmented object with the new method on it
	return maker;

})(SandwichMaker);