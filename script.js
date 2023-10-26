//todo1 Change the input to what the user press on the calculator
//todo2 Make calculation accordingly
//todo3 Show the result and the history of the last calculation on top of the input
//todo4 Change color theme

//* Change the input to what the user presses on the calculator
const inputDisplay = document.querySelector(".display");
const allButtons = document.querySelectorAll(".calc-btn");
let userInput = [];

allButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (userInput.length < 10) userInput.push(button.innerHTML);
    inputDisplay.innerHTML = userInput.join("");
  });
});

//* Make the calculation accordingly
const funcButtons = document.querySelectorAll(".calc-function");

let clicked = false;

funcButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    clicked = !clicked;
    if (!clicked) event.stopImmediatePropagation();
    console.log(clicked);
  });
});
