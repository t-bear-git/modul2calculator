// Variables defined from elements
const buttons = document.querySelectorAll("button");
const output = document.querySelector(".screen");

// Function for buttons & Eventlistener
buttons.forEach(function (button) {
  button.addEventListener("click", calculate);
});

// Calculate action:
function calculate(event) {
  // Value of clicked button
  const clickedButtonValue = event.target.value;

  if (clickedButtonValue === "=") {
    if (output.value !== "") {
      output.value = eval(output.value);
    }
  } else if (clickedButtonValue === "clear") {
    output.value = "";
  } else {
    output.value += clickedButtonValue;
  }
}
