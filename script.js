//* Change the input to what the user presses on the calculator
const inputDisplay = document.querySelector(".display");
const allButtons = document.querySelectorAll(".calc-btn");

let userInput = {
  firstNum: "",
  signChar: "",
  lastNum: "",
};
let userString = [];
const regEx = /[+\-*/]/g;

allButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (userString.length < 10) {
      userString.push(button.innerHTML);
      inputDisplay.innerHTML = userString.join("");
    }
  });
});

//* Make the calculation accordingly ============================
const funcButtons = document.querySelectorAll(".calc-function");
const equalButton = document.querySelector(".equal-btn");

let clicked = false;

function combineNumber() {
  const signCharPosition = userString.join("").search(regEx);
  userInput.firstNum = userString.slice(0, signCharPosition).join("");
  userInput.signChar = userString[signCharPosition];
  userInput.lastNum = userString
    .slice(signCharPosition + 1, userString.length)
    .join("");
  console.log(userInput);
}
// event for each calculation
funcButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    clicked = !clicked;
    combineNumber();
    if (!clicked) {
      if (userInput.signChar === "+") sumFunc();
      if (userInput.signChar === "-") subtractFunc();
      if (userInput.signChar === "*") multiplyFunc();
      if (userInput.signChar === "/") divisionFunc();
      showLastCalc();
    }
  });
});
// event for equal button
equalButton.addEventListener("click", (event) => {
  clicked = false;
  combineNumber();
  if (userInput.signChar === "+") sumFunc();
  if (userInput.signChar === "-") subtractFunc();
  if (userInput.signChar === "*") multiplyFunc();
  if (userInput.signChar === "/") divisionFunc();
  showLastCalc();
});

function sumFunc() {
  const answer = parseFloat(userInput.firstNum) + parseFloat(userInput.lastNum);
  inputDisplay.innerHTML = answer.toPrecision(7);
  userString = [];
}
function subtractFunc() {
  const answer = parseFloat(userInput.firstNum) - parseFloat(userInput.lastNum);
  inputDisplay.innerHTML = answer.toPrecision(7);
  userString = [];
}
function multiplyFunc() {
  const answer = parseFloat(userInput.firstNum) * parseFloat(userInput.lastNum);
  inputDisplay.innerHTML = answer.toPrecision(7);
  userString = [];
}
function divisionFunc() {
  const answer = parseFloat(userInput.firstNum) / parseFloat(userInput.lastNum);
  inputDisplay.innerHTML = answer.toPrecision(7);
  userString = [];
}

// Add delete and reset button
const deleteButton = document.querySelector(".del-btn");
const resetButton = document.querySelector(".reset-btn");

deleteButton.addEventListener("click", () => {
  userString.pop();
  inputDisplay.innerHTML = userString.length === 0 ? 0 : userString.join("");
});

resetButton.addEventListener("click", () => {
  clicked = false;
  userString = [];
  inputDisplay.innerHTML = 0;
});

// Show the last calculation
const lastCalc = document.createElement("span");
function showLastCalc() {
  lastCalc.innerHTML =
    userInput.firstNum + " " + userInput.signChar + " " + userInput.lastNum;
  inputDisplay.before(lastCalc);
}
