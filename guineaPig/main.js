"use-strict";

var outputTarget = document.getElementById("output-target");

var articleSection = document.getElementsByClassName("article-section");

function handleSectionClick(MouseEvent) {
  console.log(MouseEvent);
  var elementText = event.target.innerHTML;
  outputTarget.innerHTML = "You clicked on the " + elementText;
};

for ( var i = 0; i < articleSection.length; i++) {
  articleSection.item(i).addEventListener("click", handleSectionClick);
};
/////////////////////////////////////////////////////////////////

var pageHeader = document.getElementById("page-header");

pageHeader.addEventListener("mouseover", handleHeaderMouseOver);

pageHeader.addEventListener("mouseout", handleHeaderMouseOut);

function handleHeaderMouseOver (MouseEvent) {
  outputTarget.innerHTML = "You moved your mouse over the header";
};

function handleHeaderMouseOut (MouseEvent) {
  outputTarget.innerHTML = "You left me!!";  
};
///////////////////////////////////////////////////////////////


var keypressInput = document.getElementById("keypress-input");

keypressInput.addEventListener("keydown", function(MouseEvent){
  console.log("MouseEvent", MouseEvent);
  outputTarget.innerHTML = MouseEvent.target.value;
});
///////////////////////////////////////////////////////////////

var guineaPig = document.getElementById("guineaPig");

document.getElementById("add-color")
  .addEventListener("click", function(MouseEvent){
  guineaPig.classList.toggle("blue");
});

document.getElementById("make-large")
  .addEventListener("click", function(MouseEvent){
  guineaPig.classList.toggle("large");
});

document.getElementById("add-border")
  .addEventListener("click", function(MouseEvent){
  guineaPig.classList.toggle("bordered");
});

document.getElementById("add-rounding")
  .addEventListener("click", function(MouseEvent){
  guineaPig.classList.toggle("rounded");
});