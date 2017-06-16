"use strict";

// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
// var selectedTopping;

// Get a reference to the <select> elements that have all the options
var meatChooser = document.getElementById("meatSelect");
var breadChooser = document.getElementById("breadSelect");
var cheeseChooser = document.getElementById("cheeseSelect");
var condimentChooser = document.getElementById("condimentSelect");
var veggieChooser = document.getElementById("veggieSelect");

//Get a reference to the submit button
var button = document.getElementById("submit");

//Start you topping base at 0
var toppingPrice = 0;


//////////////////
//EVENT LISTENERS
//////////////////

breadChooser.addEventListener("change", function(event) {
  console.log("Bread Change")
});

cheeseChooser.addEventListener("change", function(event) {
  console.log("Cheese Change")
});

veggieChooser.addEventListener("change", function(event) {
  console.log("Vegetable Change")
});

condimentChooser.addEventListener("change", function(event) {
  console.log("Condiment Change")
});

meatChooser.addEventListener("change", function(event) {
  console.log("Meat Change")
});

button.addEventListener("click", function(event) {
    console.log("Click")
    var breadArray = [];
    var meatArray = [];
    var cheeseArray = [];
    var vegetableArray = [];
    var condimentArray = [];
    for (var i = 0; i < meatSelect.length; i++) {
      if (breadSelect[i].selected === true) {
        breadArray.push(breadChooser[i].value);
      } 
      if (meatSelect[i].selected === true) {
        meatArray.push(meatChooser[i].value);
      }
      if (cheeseSelect[i].selected === true) {
        cheeseArray.push(cheeseChooser[i].value);
      }
      if (vegetableSelect[i].selected === true) {
        vegetableArray.push(veggieChooser[i].value);
      }
      if (condimentSelect[i].selected === true) {
        condimentArray.push(condimentChooser[i].value);
      }
    }
    console.log(breadArray, meatArray, cheeseArray, vegetableArray, condimentArray);
    var meatCost = 0;
    for (var i = 0; i < meatArray.length; i++) {
      meatCost += SandwichMaker.addMeat(meatArray[i]);
    }
    console.log("Meat Cost", meatCost);
    SandwichMaker.addTopping(meatCost);
    var breadCost = 0;
    for (var i = 0; i < breadArray.length; i++) {
      breadCost += SandwichMaker.addBread(breadArray[i]);
    }
    console.log("Bread Cost", breadCost);
    SandwichMaker.addTopping(breadCost);
    var cheeseCost = 0;
    for (var i = 0; i < cheeseArray.length; i++) {
      cheeseCost += SandwichMaker.addCheese(cheeseArray[i]);
    }
    console.log("Cheese Cost", cheeseCost);
    SandwichMaker.addTopping(cheeseCost);
    var condimentCost = 0;
    for (var i = 0; i < condimentArray.length; i++) {
      condimentCost += SandwichMaker.addCondiment(condimentArray[i]);
    }
    console.log("Condiment Cost", condimentCost);
    SandwichMaker.addTopping(condimentCost);
    var vegetableCost = 0;
    for (var i = 0; i < vegetableArray.length; i++) {
      vegetableCost += SandwichMaker.addVegetable(vegetableArray[i]);
    }
    SandwichMaker.addTopping(vegetableCost)
    console.log("Vegetable Cost", vegetableCost);

    toppingPrice = meatCost + breadCost + cheeseCost + condimentCost + vegetableCost;
    console.log("Sandwich Price", toppingPrice);

    var returnedPrice = SandwichMaker.displayPrice();
    document.getElementById("output").value = returnedPrice;
});