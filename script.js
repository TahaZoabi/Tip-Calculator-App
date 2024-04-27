"use strict";

// Create the variables needed
const amountOfTip = document.querySelector(".tip-amount");
const totalOfTip = document.querySelector(".total");
const resetButton = document.querySelector(".btn-reset");
const custom = document.querySelector(".btn-custom");
const bill = document.querySelector(".bill");
const people = document.querySelector(".person");

// Create a function to clear the money value display
resetButton.addEventListener("click", function () {
  amountOfTip.textContent = "$0.00";
  totalOfTip.textContent = "$0.00";
});

let percentage;
// Create a function to calculate the tip %
function calcPercentage(number) {
  percentage = (bill.value * number) / 100;

  // check if user types something
  if (bill.value !== "" && people.value !== "") {
    calcAndDisplayTipAmount();
    calcAndDisplayTotalBill();
  } else if (bill.value === "") {
    bill.style.outline = "1px solid red";
  } else if (people.value === "") {
    people.style.outline = "1px solid red";
  }
}

// Create a function to calculate the total bill per person and display it on screen
function calcAndDisplayTotalBill() {
  // Calculate the total bill per person
  // Display the total bill per person on the screen
  totalOfTip.textContent = (
    bill.value / people.value +
    parseFloat(amountOfTip.textContent)
  ).toFixed(2);
  //clearInput();
}

let tipPerPerson;
// Create a function to calculate the tip per person and display it on screen
function calcAndDisplayTipAmount() {
  tipPerPerson = (percentage / people.value).toFixed(2);
  amountOfTip.textContent = String(tipPerPerson);
}

// Create a function for custom amount
custom.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();

    // Call the calculation functions with valid input values
    calcPercentage(custom.value);
    calcAndDisplayTipAmount();
    calcAndDisplayTotalBill();
    clearInput();
  }
});

// Create a function to clear the input fields
function clearInput() {
  //bill.value = "";
  people.value = "";
  custom.value = "";
}
