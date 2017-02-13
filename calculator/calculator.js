var primaryNumber;
var secondaryNumber;
var addButton = document.getElementById("add");
var subtractButton = document.getElementById("subtract");
var multiplyButton = document.getElementById("multiply");
var divideButton = document.getElementById("divide");
var result = document.getElementById("result");
var reload = document.getElementById("clear");

function clear () {
  window.location.reload()
};

function getNumbers() {
  primaryNumber = parseInt(document.getElementById("firstNumber").value);
  secondaryNumber = parseInt(document.getElementById("secondNumber").value);
};

//Clear Button
reload.addEventListener("click", clear);



/*
  Create a function that adds two numbers
  passed in as arguments. Return the product.
 */

function addNumbers() {
  getNumbers();
  result.innerHTML = result.innerHTML+(primaryNumber+secondaryNumber);

};

addButton.addEventListener("click",addNumbers);

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the sum.
 */

function subtractNumbers() {
  getNumbers();
  result.innerHTML = result.innerHTML+(primaryNumber-secondaryNumber);

};

subtractButton.addEventListener("click",subtractNumbers);

/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the difference.
 */

function multiplyNumbers() {
  getNumbers();
  result.innerHTML = result.innerHTML+(primaryNumber*secondaryNumber);

};

multiplyButton.addEventListener("click",multiplyNumbers);


/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
function divideNumbers() {
  getNumbers();
  result.innerHTML = result.innerHTML+(primaryNumber/secondaryNumber);

};

divideButton.addEventListener("click",divideNumbers);


/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them
  Return the value of the operation.
 */