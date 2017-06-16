"use strict";
console.log("WE HAVE CHEESE");

var SandwichMaker = (function(maker) {

	// Set our bread prices key:value pairs
    var cheesePrices = {
    	"cheddar": 0.50,
    	"swiss": 0.50,
    	"pepperJack": 0.70,
    	"noCheese": 0.00,
   };


	// Adding the 'addCheese' method to the sandwich
	maker.addCheese = function(cheese) {
		console.log(cheesePrices[cheese]);
		return cheesePrices[cheese];
	}

	// Return the new, augmented object with the new method on it
	return maker;

})(SandwichMaker);